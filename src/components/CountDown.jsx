import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "../i18"

const SEVENTY_TWO_HOURS = 72 * 60 * 60 * 1000; // 72 soat millisekundda
const STORAGE_KEY = "countdown_start_time";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    const now = Date.now();
    let startTime = localStorage.getItem(STORAGE_KEY);

    if (!startTime) {
      // Birinchi marta kirgan bo‘lsa, hozirgi vaqtni saqlaymiz
      startTime = now;
      localStorage.setItem(STORAGE_KEY, startTime);
    } else {
      startTime = parseInt(startTime); // localStorage'dan string keladi, son qilish kerak
    }

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed >= SEVENTY_TWO_HOURS) {
        // Agar 72 soat tugasa, yangilaymiz
        startTime = currentTime;
        localStorage.setItem(STORAGE_KEY, startTime);
        setTimeLeft(SEVENTY_TWO_HOURS / 1000);
      } else {
        setTimeLeft(Math.floor((SEVENTY_TWO_HOURS - elapsed) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
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
    <div className="flex flex-col items-center justify-center bg-[#191919] text-white py-6 w-full h-[200px] md:h-[250px]">
      <p className="mb-2 mont font-bold text-[24px] sm:text-[28px] lg:text-[32px]">
        {t("until_campaign")}
      </p>
      <div className="flex items-center w-full px-4">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-4xl sm:text-5xl font-bold text-[#fedf51] mx-4 krone">
          {formatTime(timeLeft)}
        </span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>
      <p className="mt-2 font-bold mont text-[20px] sm:text-[24px] lg:text-[28px]">
      </p>
    </div>
  );
};

export default CountdownTimer;
