import React from 'react';

function Table() {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>
              <input placeholder="Item Description" />
            </td>
            <td>
              <input placeholder="0.00" type="number" />
            </td>
            <td>
              <input type="number" placeholder="1" />
            </td>
            <td>
              <span>$</span>
              <span>0.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
