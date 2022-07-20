import React, { useState, useEffect } from 'react';
import {Search, Searchbar} from '../styles/reviewstyles/reviewWidget.styled.js';

const SearchBar = ({ setCurrentSearch }) => {

  //search hook
  const [search, setSearch] = useState('');

  //updates search filter on change. Manages the 3 length minimum for a change to occur
  useEffect(() => {
    search.length >= 3 ? setCurrentSearch(search) : setCurrentSearch('');
  }, [search]);

  //handles change in the search input.
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Search>
      <Searchbar
        type='text'
        value={search}
        onChange={event => handleChange(event)}
        placeholder = 'HAVE A QUESTION? SEARCH FOR REVIEWS...'
      />
    </Search>
  );
};

export default SearchBar;