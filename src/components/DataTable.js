"use client";
import React, { useEffect, useState } from 'react';
import Button from './Button';

const DEFAULT_PAGE_SIZE = 5;
const DataTable = ({ data }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [pageNo, setPageNo] = useState(1);
  const [filteredData, setFilteredData] = useState([...data].slice(pageNo - 1, DEFAULT_PAGE_SIZE));

  useEffect(() => {
    setFilteredData(prev => {
      const start = (pageNo - 1) * pageSize;
      const end = ((pageNo - 1) * pageSize) + pageSize;
      return [...data].slice(start, end);
    });
  }, [data, pageNo, pageSize]);

  // Reset
  useEffect(() => {
    setPageNo(1);
  }, [pageSize]);

  const renderTable = () => {
    if (data.length > 0) {
      return <table className='flex flex-col gap-2 my-4 border-1'>
        <thead className='border-b border-pink-300 text-indigo-600 font-bold'>
          <tr>
            <td className='p-2 min-w-12 text-left'>ID</td>
            <td className='p-2 min-w-36 text-left'>Name</td>
            <td className='p-2 min-w-12 text-left'>Age</td>
            <td className='p-2 min-w-48 text-left'>Occupation</td>
          </tr>
        </thead>
        {
          filteredData.map(item => {
            return (<tbody key={item.id}>
              <tr className='border-b border-pink-300 text-center' >
                <td className='p-2 min-w-12 text-left'>{item.id}</td>
                <td className='p-2 min-w-36 text-left'>{item.name}</td>
                <td className='p-2 min-w-12 text-left'>{item.age}</td>
                <td className='p-2 min-w-48 text-left'>{item.occupation}</td>
              </tr>
            </tbody>
            );
          })
        }
      </table>;
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  const handlePrev = (e) => {
    if (pageNo > 1) {
      setPageNo(prev => {
        return prev - 1;
      });

    } return;
  };
  const handleNext = (e, totalPages) => {
    if (pageNo < totalPages) {
      setPageNo(prev => {
        return prev + 1;
      });

    }
  };

  const renderPagination = () => {
    const totalPages = Math.floor(data.length / pageSize) + 1;
    return (<div className='flex items-center gap-2 px-2'>
      <div>
        <label htmlFor="PageSize"> Show
          <select className='outline-0 p-2' name="PageSize" value={String(pageSize)} onChange={(e) => { handleChange(e); }}>
            <option value="5"> 5 </option>
            <option value="10"> 10 </option>
            <option value="20"> 20 </option>
          </select>
        </label>
      </div>
      <Button disabled={pageNo <= 1} onClick={(e) => { handlePrev(e); }}> Prev </Button>
      {`Page ${pageNo} of ${totalPages}`}
      <Button disabled={pageNo === totalPages} onClick={(e) => { handleNext(e, totalPages); }}> Next </Button>

    </div>);



  };

  return (
    <div>
      {renderTable()}
      {renderPagination()}
    </div>
  );
};

export default DataTable;