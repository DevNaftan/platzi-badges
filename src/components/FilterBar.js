import React from 'react';

import './styles/FilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FilterBar(props) {
  return (
    <div className='FilterBar'>
      <FontAwesomeIcon icon={faSearch} />
      <div className='FilterBar__container'>
        <input
          placeholder='Search badge...'
          value={props.value}
          onChange={props.onChange}
        />
        <span>Badges</span>
      </div>
    </div>
  );
}

export default FilterBar;
