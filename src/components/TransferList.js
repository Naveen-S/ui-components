"use client";
import React, { useState } from 'react';
import Button from './Button';

const LIST1 = [{ id: 1, name: 'HTML', checked: false }, { id: 2, name: 'Javascript', checked: false }, { id: 3, name: 'CSS', checked: false }, { id: 4, name: 'Typescript', checked: false }];
const LIST2 = [{ id: 5, name: 'Svelte', checked: false }, { id: 6, name: 'Angular', checked: false }, { id: 7, name: 'React', checked: false }, { id: 8, name: 'Vue', checked: false }];


const TransferList = () => {
  const [left, setLeft] = useState([...LIST1]);
  const [right, setRight] = useState([...LIST2]);

  const handleOnChange = (e, item) => {
    setLeft(prev => {
      return prev.map(i => {
        if (item.id === i.id) {
          return {
            ...i, checked: e.target.checked
          };
        }
        else {
          return i;
        }
      });
    });

    setRight(prev => {
      return prev.map(i => {
        if (item.id === i.id) {
          return {
            ...i, checked: e.target.checked
          };
        } else {

          return i;
        }
      });
    });

  };

  const render = (list) => {
    return <div className='flex flex-col border-2 border-pink-400 w-fit p-4 min-w-36'>
      {list.map(item => {
        return (
          <div className='flex gap-1 p-4 cursor-pointer' key={item.name}>
            <input id={item.id} type="checkbox" checked={item?.checked} onChange={(e) => { handleOnChange(e, item); }} />
            <label className='cursor-pointer' htmlFor={item.id}> {item.name} </label>
          </div>
        );
      })}

    </div>;
  };

  const renderLeft = () => {
    return render(left);
  };

  const renderRight = () => {
    return render(right);
  };

  const transferAllLeft = () => {
    const rightCopy = [...right];
    setLeft(prev => {
      return [...prev, ...rightCopy];
    });

    setRight([]);
  };

  const transferAllRight = () => {
    const leftCopy = [...left];
    setRight(prev => {
      return [...prev, ...leftCopy];
    });

    setLeft([]);
  };

  const transferLeft = () => {
    const rightCopy = [...right];
    const itemsToMove = rightCopy.filter(item => {
      return item.checked;
    });
    const itemsToStay = rightCopy.filter(item => !item.checked);
    setRight(itemsToStay);
    setLeft(prev => [...prev, ...itemsToMove]);
  };

  const transferRight = () => {
    const leftCopy = [...left];
    const itemsToMove = leftCopy.filter(item => {
      return item.checked;
    });
    const itemsToStay = leftCopy.filter(item => !item.checked);
    setLeft(itemsToStay);
    setRight(prev => [...prev, ...itemsToMove]);
  };

  const hasNoItemToMove = (items) => {
    const copy = [...items];
    return (copy.filter(item => item.checked)).length === 0;
  };

  const renderControls = () => {
    return (
      <div className='flex flex-col gap-2 w-fit border-t-2 border-b-2 border-pink-400 px-4'>
        <Button disabled={right.length === 0} onClick={(e) => { transferAllLeft(); }}> ⏪️ </Button>
        <Button disabled={hasNoItemToMove(right)} onClick={e => transferLeft(e)}> ◀️ </Button>
        <Button disabled={hasNoItemToMove(left)} onClick={e => transferRight(e)}> ▶️ </Button>
        <Button disabled={left.length === 0} onClick={(e) => { transferAllRight(); }}> ⏩️ </Button>
      </div>
    );
  };

  return (
    <div className='flex mt-4 justify-center'>
      {renderLeft()}
      {renderControls()}
      {renderRight()}
    </div>
  );
};

export default TransferList;