import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 1 soat (sekundlarda)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-6 w-full h-[200px]">
      <p className="mb-2 mont font-bold text-[28px]">Aksiya tugashiga</p>
      <div className="flex items-center w-full px-4">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-5xl font-bold text-[#fedf51] mx-4 krone">
          {formatTime(timeLeft)}
        </span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>
      <p className="mt-2 font-bold mont text-[28px]">
        qoldi. <span className="underline">Qatnashishga ulguring</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
