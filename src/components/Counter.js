"use client";
import React, { useState } from 'react';
import Button from './Button';

const ACTIONS = {
  DIVIDE_BY_2: 'DIVIDE_BY_2',
  SUBTRACT_BY_1: 'SUBTRACT_BY_1',
  ADD_1: 'ADD_1',
  MULTIPLY_BY_2: 'MULTIPLY_BY_2'
};

const Counter = () => {
  const [data, setData] = useState(0);
  const [stack, setStack] = useState([]);
  const [last, setLast] = useState(null);

  const handleClick = (action) => {
    switch (action) {
      case ACTIONS.DIVIDE_BY_2: {
        setStack(prev => {
          return [{ op: '/2', value: data, newValue: data / 2 }, ...prev];
        });
        setData(prev => {
          return prev / 2;
        });
        setLast(null);
      }
        break;
      case ACTIONS.SUBTRACT_BY_1: {
        setStack(prev => {
          return [{ op: '-1', value: data, newValue: data - 1 }, ...prev];
        });
        setData(prev => {
          return prev - 1;
        });
        setLast(null);
      }
        break;
      case ACTIONS.ADD_1: {
        setStack(prev => {
          return [{ op: '+1', value: data, newValue: data + 1 }, ...prev,];
        });
        setData(prev => {
          return prev + 1;
        });
        setLast(null);
      }
        break;
      case ACTIONS.MULTIPLY_BY_2: {
        setStack(prev => {
          return [{ op: 'x2', value: data, newValue: data * 2 }, ...prev];
        });
        setData(prev => {
          return prev * 2;
        });
        setLast(null);
      }
    }
  };

  const handleUndo = () => {
    const stackCopy = [...stack];
    const old = stackCopy.shift(1);
    setLast(old);
    setData(old?.value);
    setStack(stackCopy);
  };

  const handleRedo = () => {
    if (last) {
      setStack(prev => {
        return [last, ...prev];
      });
      setData(last.newValue);
      setLast(null);
    }
  };

  const handleReset = () => {
    setData(0);
    setStack([]);
    setLast({});
  };

  const renderButtons = () => {
    return (
      <div>
        <Button disabled={stack.length < 1} onClick={(e) => { handleUndo(); }}>Undo</Button>
        <Button disabled={!last} onClick={(e) => { handleRedo(); }}>Redo</Button>
        <Button onClick={(e) => handleReset()}>Reset</Button>
      </div>
    );
  };

  const renderMain = () => {
    return (
      <div>
        <Button onClick={(e) => { handleClick(ACTIONS.DIVIDE_BY_2); }}> /2 </Button>
        <Button onClick={(e) => { handleClick(ACTIONS.SUBTRACT_BY_1); }}> -1 </Button>
        <span className='font-medium text-2xl text-pink-400'> {data} </span>
        <Button onClick={(e) => { handleClick(ACTIONS.ADD_1); }}> +1 </Button>
        <Button onClick={(e) => { handleClick(ACTIONS.MULTIPLY_BY_2); }}> x2 </Button>
      </div>
    );
  };

  const renderHistory = () => {
    return (
      <>
        {
          stack.length > 0 && <div className='grid grid-cols-3 border-2 border-pink-400 mt-8 p-2 font-bold bg-pink-100 text-center'>
            <span> Operation </span>
            <span> Old Value </span>
            <span> New Value </span>
          </div>
        }
        {
          stack.length > 0 && stack.map((item, idx) => {
            return <div className='grid grid-cols-3 text-center border-l-2 border-r-2 border-b-2 border-purple-400 p-1' key={idx}>
              <div> {item?.op}</div>
              <div> {item?.value}</div>
              <div> {item?.newValue}</div>
            </div>;
          })
        }
      </>



    );
  };

  return (
    <div className='flex flex-col justify-center'>
      {renderButtons()}
      {renderMain()}
      {renderHistory()}
    </div>
  );
};

export default Counter;