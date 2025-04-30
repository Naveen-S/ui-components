import React from 'react';

const Chip = ({ chip, deleteChip, index }) => {
  return (
    <div key={index} className='bg-purple-400 text-white px-4 py-2 m-1 rounded-full'>
      <span className='mx-2'>{chip?.value}</span>
      <span className='cursor-pointer' onClick={() => { deleteChip(chip?.id); }}>✗</span>
    </div>
  );
};

export default Chip;