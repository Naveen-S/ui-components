import React from 'react';

const Traffic = (props) => {
  const { current } = props;
  const { state, backgroundColor } = current;
  // const color = ['bg-red-400', 'bg-yellow-400', 'bg-green-400'];
  // const useColor = color[state];
  return (
    <div className='flex flex-col justify-evenly items-center w-12 h-60 bg-gray-700 rounded-md'>
      {Array(3).fill(' ').map((v, idx) => {
        return <div key={idx} className={`w-8 h-8 rounded-full bg-gray-400 ${idx === state ? backgroundColor : ''}`} > </div>;
      })}

      {/* <div className={`w-8 h-8 rounded-full bg-gray-400 ${state === 1 ? backgroundColor : ''}`}> </div> */}
      {/* <div className={`w-8 h-8 rounded-full bg-gray-400 ${state === 2 ? backgroundColor : ''}`}> </div> */}
    </div >
  );
};

export default Traffic;