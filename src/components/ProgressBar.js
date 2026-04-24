'use client';
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          return prev + 10;
        }
        return 100;
      }
      );
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [percentage]);
  return (
    <div>
      <div className='w-96 h-4 bg-slate-200 overflow-hidden'>
        <div className={`h-4 bg-amber-200 transition duration-1000 ease-in`} style={{ transform: `translateX(${percentage - 100}%)` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;