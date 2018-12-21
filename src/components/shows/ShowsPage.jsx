import React from 'react';
import PropTypes from 'prop-types';
import { ShowsGenre, ShowList, ShowsScroll } from './../../components';

function ShowsPage(props) {

  function handleSelect(genreName) {
    document.getElementById('genre-title').innerHTML = genreName;
  }

  return (
    <main>
      <div className='row'>
        <aside className='col-md-3'>
          <ShowsGenre genres={props.media.genres} dispatch={props.dispatch} onSelect={handleSelect} />
        </aside>
        <section className='col-md-9'>
          <div className='card'>
            <div className='card-header'>
              <ShowsScroll dispatch={props.dispatch} media={props.media} />
            <h4 id='genre-title'>Trending</h4>
            </div>
            {props.media.selectedList ? (
              <ShowList list={props.media.selectedList} />
            ) : (
                <ShowList list={props.media.trending} />
              )}
            <ShowsScroll dispatch={props.dispatch} media={props.media} />
          </div>
        </section>
      </div>
    </main>
  );
}

ShowsPage.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsPage;