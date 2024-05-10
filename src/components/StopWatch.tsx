import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timeoutId: undefined | ReturnType<typeof setTimeout>;
  const stopwatchRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      setTime((prevTime) => prevTime + 1);
      timeoutId = setTimeout(tick, 1000);
    };

    if (isRunning) {
      timeoutId = setTimeout(tick, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (!isRunning) {
      setTime(0); // Reset time when starting
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        ref={stopwatchRef}
        className="text-4xl"
        style={{
          color: isRunning
            ? "hsl(var(--foreground))"
            : "hsl(var(--muted-foreground))",
        }}
      >
        {Math.floor(time / 60)
          .toString()
          .padStart(1, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </button>
    </div>
  );
};

export default Stopwatch;
