import React from 'react';
import PropTypes from 'prop-types';
import * as c from './../../constants';
import * as actions from './../../actions';

function ShowsScroll(props) {

  function handlePageTurn(direction) {
    // props.dispatch(actions.   );
  }

  return (
    <div>
      <style jsx>{`
        img: {

        }
      `}</style>
      <img onClick={() => handlePageTurn(-1)} src={c.LEFT_ARROW} alt='left arrow' />
      <img onClick={() => handlePageTurn(1)} src={c.RIGHT_ARROW} alt='right arrow' />
    </div>
  );
}

ShowsScroll.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsScroll;