import React from 'react'

const SearchBar = props => {
  return(
    <div className="input-group input-group-rounded">
      <a className="button large" onClick={props.handleClick} id='submit'>Search</a>
      <label>
        <input
          className="input-group-field"
          id='search-field'
          name='search'
          type='search'
          placeholder='Enter location'
          value={props.search}
          onChange={props.handleSearchChange}
          />
      </label>
    </div>

  );
}

export default SearchBar;
