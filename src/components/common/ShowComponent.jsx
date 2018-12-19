import React from 'react';
import PropTypes from 'prop-types';
import fallback from './../../assets/fallback.png';
import { addToShows } from './../../actions';
import * as c from './../../constants';

function ShowComponent(props) {
  const { name, id, poster_path, backdrop_path, overview, popularity, first_air_date } = props.show;
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <figure className='show-component'>
      { poster_path ? (
        <img className='show-component-poster' src={img} alt='POSTER' data-toggle="modal" data-target={"#id" + id} />
      ) : (
        <img className='show-component-poster' src={fallback} alt='POSTER' data-toggle="modal" data-target={"#id" + id} />
      )}

      {/* Modal */}
      <article className="modal fade" id={"id" + id} tabIndex="-1" role="dialog" aria-labelledby={props.show.name + "-modal"} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">

            <header className="modal-header">
              <h5 className="modal-title" id={props.show.name + "-modal"}>{name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </header>

            <main>
              <div className="modal-body">
                {backdrop_path ? (
                  <img className="modal-image" src={backdrop} />
                ) : (
                  null
                )}
                <div className="modal-description">
                  <p>{overview}</p>
                  <p className='modal-details'>Original Airdate: {first_air_date}  |  Popularity: {Math.floor(popularity)}</p>
                </div>
              </div>
            </main>

            <footer className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={() => addToShows(props.show)} type="button" className="btn btn-primary">Add to My Shows</button>
            </footer>

          </div>
        </div>
      </article>

      <p>{name}</p>
    </figure>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object
}

export default ShowComponent;