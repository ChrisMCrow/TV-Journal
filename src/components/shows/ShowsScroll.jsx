import React from 'react';
import PropTypes from 'prop-types';
import * as c from './../../constants';
import * as actions from './../../actions';

function ShowsScroll(props) {
  console.log('ShowsScroll props', props);
  function handlePageTurn(direction) {
    let newPage = props.media.selectedGenrePage + direction;
    if (newPage > 0) {
      props.dispatch(actions.discoverGenre(props.media.selectedGenreId, newPage));
    }
  }

  return (
    <div className='button-wrapper'>
      <style jsx>{`
        .button-wrapper {
          text-align: center;
          margin-bottom: -50px;
        }
        .button-wrapper img {
          cursor: pointer;
        }
      `}</style>
      {props.media.selectedGenreId ? (
        <div>
          <img onClick={() => handlePageTurn(-1)} src={c.LEFT_ARROW} alt='left arrow' />
          <img onClick={() => handlePageTurn(1)} src={c.RIGHT_ARROW} alt='right arrow' />
          <p className='text-muted'>{props.media.selectedGenrePage}</p>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

ShowsScroll.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsScroll;