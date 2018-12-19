import React from 'react';
import PropTypes from 'prop-types';

function ShowComponent(props) {
  const { name, poster_path, backdrop_path, overview, popularity, first_air_date } = props.show;
  console.log(props);
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div className='show-container'>
      <style jsx>{`
        .show-container {
          text-align: center;
        }
        .poster {
          width: 80%;
          min-width: 70px;
          cursor: pointer;
        }
        .modal-content {
          background-color: #333;
          width: 80vw;
        }
        .modal-body {
          padding: 0;
          overflow: auto;
        }
        .modal-image {
          width: 100%;
        }
        .description {
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 10px;
          padding: 10px;
          text-shadow: 1px 1px 1px black;

        }
      `}</style>
      <img className='poster' src={img} alt='POSTER' data-toggle="modal" data-target={"#id" + props.show.id} />

      {/* <!-- Modal --> */}
      <div className="modal fade" id={"id" + props.show.id} tabindex="-1" role="dialog" aria-labelledby={props.show.name + "-modal"} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={props.show.name + "-modal"}>{name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              <div className="modal-body">
                <img className="modal-image" src={backdrop} />
                <p className="description">{overview}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <p>{name}</p>
    </div>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object
}

export default ShowComponent;