import React, { useState, useEffect } from 'react';
import {Searchbar} from '../styles/reviewstyles/reviewWidget.styled.js';

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
    <div>
      <Searchbar
        type='text'
        value={search}
        onChange={event => handleChange(event)}
        placeholder = 'Text Filter. minimum 3 characters'
      />
    </div>
  );
};

export default SearchBar;