import React from 'react';
import Table from './Table';

const TableComponent = ({ index, isTableShown, toggleTable }) => {
  return (
    <div className="table-component">
      <div className="svg-btn">
        <button onClick={() => toggleTable(index)}>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <text
              x="50%"
              y="70%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="black"
              fontSize="14"
              fontWeight="bold"
            >
              {isTableShown ? 'X' : '+'}
            </text>
          </svg>
        </button>
      </div>
      {isTableShown && <Table />}
    </div>
  );
};

export default TableComponent;
