import  { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date(); 
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <div>
      {timeLeft.days !== undefined ? (
        <div className="flex m-auto gap-2 justify-center items-center">
            <div className="flex flex-col">
            <span className="w-8 h-8 bg-[#ed242e] text-white rounded-md flex items-center justify-center">{timeLeft.seconds}</span>
            <span className="text-sm text-[#ed242e] mt-3">ثانیه</span>
            </div>
          <div className="flex flex-col">
            <span className="w-8 h-8 bg-[#ed242e] text-white rounded-md flex items-center justify-center">{timeLeft.minutes}</span>
            <span className="text-sm text-[#ed242e] mt-3">دقیقه</span>
            </div>
            <div className="flex flex-col">
            <span className="w-8 h-8 bg-[#ed242e] text-white rounded-md flex items-center justify-center">{timeLeft.hours}</span>
            <span className="text-sm text-[#ed242e] mt-3">ساعت</span>
            </div>
            <div className="flex flex-col">
            <span className="w-8 h-8 bg-[#ed242e] text-white rounded-md flex items-center justify-center">{timeLeft.days}</span>
            <span className="text-sm text-[#ed242e] mt-3">روز</span>
            </div>
        </div>
      ) : (
        <span>زمان به پایان رسید!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
