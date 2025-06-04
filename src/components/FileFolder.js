import React, { useState } from 'react';
import Button from './Button';

const AddFileFolder = ({ node, rootData, setData }) => {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState('');
  const [isFolder, setIsFolder] = useState(true);

  const handleOnClick = () => {
    setShowInput(prev => !prev);
  };

  // Curx of the problem 1
  const handleOnSubmit = (e) => {
    const nodeData = {
      id: Math.floor(Math.random() * 100), // hacky
      name: name,
      isFolder: isFolder
    };

    const updateTree = (tree) => {
      return tree.map(item => {
        if (item.id === node.id) {
          return { ...item, children: [...(item.children || []), nodeData] };
        }
        else if (item.children) {
          return { ...item, children: updateTree(item.children) };
        }
        return item;
      });
    };

    setData((prev) => updateTree(prev));
    setShowInput(prev => !prev);
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleIsFolder = (e) => {
    setIsFolder(e.target.checked);
  };

  return (
    <div className='inline-block'>
      <>
        {!showInput && <span className='ml-4 cursor-pointer' onClick={(e) => { handleOnClick(e); }}> 🗂️ </span>}
      </>
      {showInput && (
        <form className='ml-20' onSubmit={(e) => { e.preventDefault(); handleOnSubmit(e); }}>
          <input className='border-2 border-pink-500 rounded-sm' type="text" name='name' value={name} onChange={(e) => { handleOnChange(e); }} />
          <input className='ml-4' type="checkbox" checked={isFolder} name='isFolder' onChange={(e) => { handleIsFolder(e); }} />
          <label className='ml-1'>Is Folder</label>
          <Button type='submit'> Submit </Button>
        </form>)}

    </div>
  );
};


const FileFolder = ({ data, setData }) => {
  const [expanded, setExpanded] = useState({});
  const handleOnClick = (e, node) => {
    setExpanded(prev => {
      return { ...prev, [node.id]: !prev[node.id] };
    });
  };

  // Curx of the problem 2
  const handleDelete = (e, node) => {
    const deleteNode = (data) => {
      return data.filter(item => item.id !== node.id).map(item => item.children ? { ...item, children: deleteNode(item.children) } : item);
    };
    setData(prev => deleteNode(prev));
  };

  const renderData = (data) => {
    return data?.map(node => {
      return (<div className='ml-4 cursor-pointer' key={node.name}>
        <span onClick={(e) => handleOnClick(e, node)}>
          {node.isFolder ? expanded[node.id] ? ' 🔽 ' : ' ▶️ ' : ' *️⃣ '}
        </span>
        <span>{node.name}</span>
        {node.isFolder && <AddFileFolder node={node} rootData={data} setData={setData} />}
        <span className='ml-4 cursor-pointer' onClick={(e) => { handleDelete(e, node); }}> 🗑️ </span>
        {expanded[node.id] && node.children && renderData(node.children)}
      </div>);
    });
  };

  return (
    <div>{renderData(data)}</div>
  );
};

export default FileFolder;