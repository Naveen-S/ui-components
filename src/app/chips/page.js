"use client";

import Chip from '@/components/Chip';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Chips = () => {
  const [input, setInput] = React.useState('');
  const [chips, setChips] = React.useState([]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChips([...chips, { id: uuidv4(), value: input }]);
    setInput('');
  };

  const deleteChip = (id) => {
    setChips(chips.filter((chip) => chip.id !== id));
  };

  return (
    <form className='text-center my-8' onSubmit={(e) => { handleSubmit(e); }}>
      <input type="text" className='border-2 w-72 h-16 p-1 m-1 px-4 my-4 border-purple-400 rounded-md outline-pink-400 text-pink-700'
        value={input}
        placeholder='Enter Chip value'
        onChange={(e) => {
          handleOnChange(e);
        }} />
      <div className='flex flex-wrap justify-center'>
        {chips.map((chip, index) => {
          return <Chip key={index} chip={chip} deleteChip={deleteChip} index={index} />;
        })}
      </div>
    </form>
  );
};

export default Chips;