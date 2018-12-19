import React from 'react';
import PropTypes from 'prop-types';
import { searchTV } from './../../actions';

function ShowSearch(props) {
  let searchQuery = React.createRef();

  function handleSearchSubmit() {
    let uriQuery = encodeURI(searchQuery.current.value);
    props.dispatch(searchTV(uriQuery));
    searchQuery.current.value = '';
  }

  return(
    <div className='show-search'>
      <style jsx>{`
        .search-form {
          margin: 10px 0;
        }
      `}</style>
      <form onSubmit={handleSearchSubmit}>
        <input
          className='form-control' 
          placeholder='Search...' 
          type='text' 
          ref={searchQuery} 
        />
      </form>
    </div>
  );
}

ShowSearch.propTypes = {
  list: PropTypes.object
}

export default ShowSearch;