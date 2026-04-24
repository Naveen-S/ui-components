'use client';
import React, { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/Button';

const Progress = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex justify-center mt-10'>
      <Button onClick={() => { setCount(prev => prev + 1); }}> Add </Button>
      <ProgressBar />
    </div>
  );
};

export default Progress;
