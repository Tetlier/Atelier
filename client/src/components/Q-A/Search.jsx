import React, {useState, useEffect} from 'react';
import { QorATitle } from '../styles/Q-A/QAList.styled.js';

export default function Search({updateSearch}) {

  const [term, setTerm] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // passes searchTerm to QA
  useEffect(() => {
    updateSearch(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setTerm(e.target.value);
    // if user typed 3 or more char, update searchTerm
    if (e.target.value.length >= 3) {
      setSearchTerm(e.target.value);
    } else { // otherwise, no filter
      if (searchTerm.length !== 0) {
        setSearchTerm('');
      }
    }
  };

  return (
    <div className="search">
      <QorATitle>
        <form>
          <input type="text"
            value={term}
            placeholder="Have a question? Search for answers..."
            size="50"
            onChange={(e) => { handleChange(e); }}
          />
        </form>
      </QorATitle>
    </div>
  );
}