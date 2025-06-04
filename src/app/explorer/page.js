"use client";
import React, { useState } from 'react';
import { data as json } from './data';
import FileFolder from '@/components/FileFolder';

const Explorer = () => {
  const [data, setData] = useState(json);
  console.log('data', data);
  // Add node to data
  const addNodeToData = (nodeId, newData) => {
   
    setData(prev => { updateTree(prev); });
  };
  const renderData = () => {
    return <FileFolder data={data} setData={setData}  />;
  };
  return (
    <div className='mt-8'>
      {renderData()}
    </div>
  );
};
export default Explorer;