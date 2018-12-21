import React from 'react';
import PropTypes from 'prop-types';
import { discoverGenre } from './../../actions';
import constants from './../../constants';
const { c } = constants;

function ShowsScroll(props) {

  function handlePageTurn(direction) {
    let newPage = props.media.page + direction;
    if (newPage > 0) {
      props.dispatch(discoverGenre(props.media.filterQuery, newPage));
    }
  }

  return (
    <div className='shows-scroll'>
      {props.media.filterQuery ? (
        <div>
          <img onClick={() => handlePageTurn(-1)} src={c.LEFT_ARROW} alt='left arrow' />
          <span className='text-muted shows-scroll-number'>{props.media.page}</span>
          <img onClick={() => handlePageTurn(1)} src={c.RIGHT_ARROW} alt='right arrow' />
        </div>
      ) : (
        <div style={{visibility: 'hidden'}}>
          <img src={c.LEFT_ARROW} alt='left arrow' />
          <span className='text-muted'>1</span>
          <img src={c.RIGHT_ARROW} alt='right arrow' />
        </div>
      )}
    </div>
  );
}

ShowsScroll.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsScroll;