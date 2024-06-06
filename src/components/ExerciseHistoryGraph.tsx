import { UserData } from "@/types";
import { calculateScore } from "@/utils/progressiveOverloadScore";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface ExerciseProgressProps {
  exerciseName: string;
  userData: UserData;
}

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="bg-card m-2 p-2 rounded">
        <p>{`${payload?.[0].payload.date}`}</p>
        <p>{`${payload?.[0].payload.weight} lbs`}</p>
        <p>{`${payload?.[0].payload.reps} reps`}</p>
      </div>
    );
  }

  return null;
};

const ExerciseProgress: React.FC<ExerciseProgressProps> = ({
  exerciseName,
  userData,
}) => {
  const exerciseData = userData.exercises[exerciseName];
  const [viewFullHistory, setViewFullHistory] = useState(false);

  if (!exerciseData) {
    return <p>No data available for {exerciseName}</p>;
  }

  const data = Object.entries(exerciseData.history)
    .map(([date, historyEntry]) => {
      const firstSet = historyEntry[0];
      if (firstSet) {
        return {
          date,
          weight: Number(firstSet.weight),
          reps: Number(firstSet.reps),
          overload: calculateScore(
            Number(firstSet.weight),
            Number(firstSet.reps)
          ),
        };
      }
      return null;
    })
    .filter((entry) => entry !== null)
    .sort((a, b) => new Date(a!.date).getTime() - new Date(b!.date).getTime()); // Sorting by date

  if (data.length == 0) {
    return <p>No data available for {exerciseName}</p>;
  }

  const handleToggleView = () => {
    setViewFullHistory(!viewFullHistory);
  };

  const displayedData = viewFullHistory
    ? data
    : data.length >= 10
    ? data.slice(data.length - 10, data.length)
    : data;

  const overloads = displayedData.map((entry) => entry!.overload);
  const maxOverload = Math.max(...overloads);
  const minOverload = Math.min(...overloads);

  return (
    <>
      <div className="text-center">
        <button onClick={handleToggleView}>
          {viewFullHistory ? "Full History" : "Recent History"}
        </button>
        {!viewFullHistory && <div></div>}
      </div>
      <ResponsiveContainer
        width="100%"
        height={400}
        className="flex justify-center items-center"
      >
        <LineChart
          data={displayedData}
          margin={{
            top: 0,
            right: 30,
            left: -15,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="2 5" />
          <XAxis dataKey="date" hide={true} />
          <YAxis
            type="number"
            domain={[Math.floor(minOverload) - 5, Math.ceil(maxOverload) + 5]}
          ></YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            dot={{ strokeWidth: 0 }}
            type="monotone"
            dataKey="overload"
            stroke="#3d61ff"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExerciseProgress;
