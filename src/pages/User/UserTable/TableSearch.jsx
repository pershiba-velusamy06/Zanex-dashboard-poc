import React from 'react'

const TableSearch =  ({ filterText, onFilter, onClear }) => {
  return (
 
        	<>
        		<input
        			id="search"
        			type="text"
        			placeholder="Filter By Name"
        			aria-label="Search Input"
        			value={filterText}
        			onChange={onFilter}
        		/>
        		
        	</>
     );
  
}

export default TableSearch
