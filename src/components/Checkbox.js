import React from 'react';
import { data as checkboxData } from '../app/nestedCheckbox/data';

const Checkbox = ({ data, selected, setSelected }) => {

  const handleOnChange = (e, item) => {
    const isChecked = e.target.checked;
    setSelected(prev => {
      const newState = { ...prev, [item.id]: isChecked };

      // Checking parent will check all child.
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) {
            updateChildren(child);
          }
        });
      };
      updateChildren(item);

      // Check parent when all children are checked.
      const updateParent = (node, data) => {
        const findParent = (nodeId, tree) => {
          for (const item of tree) {
            if (item.children?.some(child => child.id === nodeId)) {
              return item;
            }
            const found = item.children && findParent(nodeId, item.children);
            if (found) {
              return found;
            }
          }
          return null;
        };

        let parent = findParent(node.id, data);
        while (parent) {
          const allChildrenChecked = parent.children.every(child => newState[child.id]);
          newState[parent.id] = allChildrenChecked;
          parent = findParent(parent.id, data);
        }
      };
      updateParent(item, checkboxData);

      return newState;
    });
  };



  return (
    <div>
      {data.map(node => {
        return (
          <div className='ml-4' key={node.id}>
            <input type="checkbox" name={node.label} checked={selected[node.id]} onChange={(e) => handleOnChange(e, node)} />
            <label className='ml-1'>{node.name}</label>
            {node?.children && <Checkbox data={node.children} selected={selected} setSelected={setSelected} />}
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;