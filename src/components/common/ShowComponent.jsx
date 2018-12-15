import React from 'react';
import PropTypes from 'prop-types';
// import Daredevil from './../../assets/daredevil.jpg';

function ShowComponent(props) {
  console.log('ShowComponent: ', props)
  const { title, img } = props.show;
  return(
    <div className='show-container'>
      <style jsx>{`
        .show-container {
          width: 100px;
          text-align: center;
        }
        .poster {
          height: 150px;
        }
      `}</style>
      <img className='poster' src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object
}

export default ShowComponent;