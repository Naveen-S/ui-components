"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

const Carousal = () => {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className='flex justify-center items-center my-4 border-2 border-gray-300 p-4 rounded-lg w-fit relative bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
      <div className='cursor-pointer mr-2 absolute left-8 w-12 h-12 rounded-full bg-purple-100 flex justify-center items-center' onClick={() => { handlePrevious(); }}>
        <Image src="/left-arrow.png" width={20} height={20} alt="" />
      </div>
      <div>
        {
          images.map((image, idx) => {
            return idx === current && <Image key={image.alt} width={900} height={600} src={image.src} alt={image.alt} srcSet="" />;
          })
        }
        <div className='absolute bottom-8 p-2 bg-purple-100 rounded-lg left-1/2 transform -translate-x-1/2'>
          <div className='flex justify-center'>
            {
              images.map((image, idx) => {
                return <div key={image.alt} className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${current === idx ? 'bg-purple-400' : 'bg-gray-400'}`} onClick={() => { setCurrent(idx); }}></div>;
              })
            }
          </div>
        </div>
      </div>
      <div className='cursor-pointer ml-2 absolute right-8 w-12 h-12 rounded-full bg-purple-100 flex justify-center items-center' onClick={() => { handleNext(); }}>
        <Image src="/right-arrow.png" width={20} height={20} alt="" />
      </div>
    </div>
  );
};

export default Carousal;