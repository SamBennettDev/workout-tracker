import { useState, useEffect, useRef } from "react";

export function Timer() {
  const [time, setTime] = useState("stopped");
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<null | ReturnType<typeof setInterval>>(null);

  function startTime() {
    if (time === "stopped" || time === "paused") {
      setTime("running");
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  }

  function pauseTime() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTime("paused");
  }

  function changeTime() {
    if (time === "stopped" || time === "paused") {
      setTime("0:00");
      setSeconds(0);
      startTime();
    } else if (time === "running") {
      pauseTime();
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <>
      {time === "stopped" ? (
        <h1 className="absolute top-1/2 text-muted-foreground">
          Click on time to start
        </h1>
      ) : null}

      <button
        className="text-5xl font-semibold"
        onClick={() => {
          changeTime();
        }}
      >
        {time === "stopped" || time === "paused" ? (
          <div className="text-muted-foreground">0:00</div>
        ) : (
          formatTime(seconds)
        )}
      </button>
    </>
  );
}
