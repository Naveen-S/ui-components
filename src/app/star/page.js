"use client";
import StarRating from '@/components/StarRating';
import React, { useState } from 'react';

const page = () => {
  const [selected, setSelected] = useState(-1);
  return (
    <div>
      <StarRating numOfStars={5} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default page;