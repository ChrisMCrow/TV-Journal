import React from 'react';
import PropTypes from 'prop-types';
// import Daredevil from './../assets/daredevil.jpg';

function ShowComponent(props) {
  return(
    <div>
      <h6>show</h6>
      <img src={props.img} />
      <p>{props.title}</p>
    </div>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object
}

export default ShowComponent;