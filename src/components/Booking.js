'use client';
import React, { useState } from 'react';
import Button from './Button';

const formatDate = (secs) => {
  const year = new Date(secs).getFullYear();
  const month = (new Date(secs).getMonth() + 1).toString().padStart(2, '0');
  const date = (new Date(secs).getDate()).toString().padStart(2, '0');
  return `${year}-${month}-${date}`;
};

const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;
const FLIGHT_TYPES = {
  ONE_WAY: 'one-way',
  RETURN: 'return'
};

const Booking = () => {
  const [type, setType] = useState(FLIGHT_TYPES.ONE_WAY);
  const [firstDate, setFirstDate] = useState(formatDate(new Date()));
  const [secondDate, setSecondDate] = useState(formatDate(new Date(Date.now() + DAY_IN_SECONDS))); // Tomorrow

  const handleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleDateChange = (e, func) => {
    console.log(e.target.value);
    func(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (type === FLIGHT_TYPES.ONE_WAY) {
      alert(`You have booked a one-way flight on ${secondDate}`);
      return;
    }
    alert(`You have booked a return flight, departing on ${firstDate} and returning on ${secondDate}`);
    console.log('Submit', e);
  };
  return (
    <form className='flex flex-col gap-2' onSubmit={(e) => submitForm(e)}>
      <div className='p-2 border-2 border-purple-400 rounded-md text-pink-500'>
        <select className="outline-none w-72 cursor-pointer" name="type" id="flight-type" value={type} onChange={(e) => { handleChange(e); }}>
          <option value="one-way"> One Way Flight</option>
          <option value="return"> Return Flight</option>
        </select>
      </div>
      <div className='p-2 border-2 border-purple-400 rounded-md text-pink-500 cursor-pointer'>
        <input className='w-72 cursor-pointer outline-none' type="date" name="one-way" value={firstDate} onChange={(e) => { handleDateChange(e, setFirstDate); }} />
      </div>
      {type === FLIGHT_TYPES.RETURN && <div className='p-2 border-2 border-purple-400 rounded-md text-pink-500 cursor-pointer'>
        <input className='w-72 cursor-pointer outline-none' type="date" name="return" value={secondDate} onChange={e => handleDateChange(e, setSecondDate)} min={firstDate} />
      </div>}
      <Button type="submit">Book</Button>
    </form>
  );
};

export default Booking;