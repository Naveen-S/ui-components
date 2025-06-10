"use client";
import React, { useState, useEffect } from 'react';
import Traffic from '@/components/Traffic';

// const TIME = [4000, 500, 3000];
const config = {
  red: {
    backgroundColor: 'bg-red-400',
    duration: 4000,
    next: 'green',
    state: 0
  },
  yellow: {
    backgroundColor: 'bg-yellow-400',
    duration: 500,
    next: 'red',
    state: 1
  },
  green: {
    backgroundColor: 'bg-green-400',
    duration: 3000,
    next: 'yellow',
    state: 2
  },
};

const TrafficLight = () => {
  // solution 1
  // const [state, setState] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setState(prev => { return (prev + 1) % 3; });
  //   }, TIME[state]);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [state]);

  // solution 2
  const [currentColor, setCurrentColor] = useState('green');

  useEffect(() => {
    const { duration, next } = config[currentColor];
    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentColor]);

  return (
    <div className='flex justify-center my-4'>
      {/* <Traffic state={config[currentColor]} /> */}
      <Traffic current={config[currentColor]} />

    </div>
  );
};

export default TrafficLight;