import React from 'react';
import PropTypes from 'prop-types';
import fallback from './../../assets/fallback.png';
import { addToShows, deleteFromList, handleHover } from './../../actions';
import constants from './../../constants';
const { c } = constants;

function ShowComponent(props) {
  const { name, id, poster_path, backdrop_path, overview, popularity, first_air_date } = props.show;
  const { dispatch } = props;
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div>
      <figure className='show-component'>
        <img
          className='show-component-poster'
          src={poster_path ? img : fallback}
          alt='POSTER'
          data-toggle="modal"
          data-target={"#id" + id}
        />
        {props.show.hasOwnProperty('onList') ? (
          <p onClick={() => deleteFromList(props.show.id, props.listTitle)} className='show-component-close'>&times;</p>
        ) : (null)}

        <p className='show-component-title'>{name}</p>
      </figure>


      {/* Modal */}
      <div className="modal fade" id={"id" + id} tabIndex="-1" role="dialog" aria-labelledby={props.show.name + "-modal"} aria-hidden="true">
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
                  <img className="modal-image" src={backdrop} alt="show backdrop" />
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

              <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Add to List
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button type='button' data-dismiss="modal" className="dropdown-item" onClick={() => addToShows('watching', props.show)}>Currently Watching</button>
                  <button type='button' data-dismiss="modal" className="dropdown-item" onClick={() => addToShows('caught_up', props.show)}>Caught Up</button>
                  <button type='button' data-dismiss="modal" className="dropdown-item" onClick={() => addToShows('watchlist', props.show)}>Want to Watch</button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

ShowComponent.propTypes = {
  show: PropTypes.object,
  listTitle: PropTypes.string,
  dispatch: PropTypes.func
}

export default ShowComponent;