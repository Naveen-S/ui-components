"use client";

import React, { useState } from 'react';
import StarRating from '@/components/StarRating';

const Star = () => {
  const [selected, setSelected] = useState(-1);
  return (
    <div>
      <StarRating numOfStars={5} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Star;