import React from 'react';
import PropTypes from 'prop-types';
import { searchTV } from './../../actions';

function ShowSearch(props) {
  let searchQuery = React.createRef();

  function handleSearchSubmit(e) {
    e.preventDefault();
    let uriQuery = encodeURI(searchQuery.current.value);
    props.dispatch(searchTV(uriQuery));
    searchQuery.current.value = '';
  }

  return(
    <nav className='show-search'>
      <form onSubmit={handleSearchSubmit}>
        <input
          className='form-control' 
          placeholder='Search...' 
          type='text' 
          ref={searchQuery} 
        />
      </form>
    </nav>
  );
}

ShowSearch.propTypes = {
  list: PropTypes.object
}

export default ShowSearch;