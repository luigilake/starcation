import React from 'react';

const FilterButton = props => {
  let label = ''
  if(props.label == ''){
    label = 'All Celestials'
  } else {
    label = props.label.charAt(0).toUpperCase() + props.label.slice(1)
  }
  return(
    <button className='filter-button small-12 medium-3 large-1' type="button" onClick={props.handleClick}>{label}</button>
  )
}

export default FilterButton
