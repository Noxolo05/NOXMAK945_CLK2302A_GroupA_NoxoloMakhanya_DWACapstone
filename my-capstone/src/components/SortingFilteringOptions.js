// SortingFilteringOptions.js

import React from 'react';

const SortingFilteringOptions = ({ handleSort, handleFilter }) => {
  return (
    <div>
      <h3>Sort Shows</h3>
      <button onClick={() => handleSort('titleAtoZ')}>Title A-Z</button>
      <button onClick={() => handleSort('titleZtoA')}>Title Z-A</button>
      <button onClick={() => handleSort('dateAsc')}>Date Ascending</button>
      <button onClick={() => handleSort('dateDesc')}>Date Descending</button>

      <h3>Filter Shows</h3>
      <input type="text" placeholder="Search by title" onChange={(e) => handleFilter(e.target.value)} />
      {/* Add more filtering options based on genres or other criteria */}
    </div>
  );
};

export default SortingFilteringOptions;
