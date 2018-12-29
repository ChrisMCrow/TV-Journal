import React from 'react';
import PropTypes from 'prop-types';
import { ShowsGenre, ShowList, ShowsScroll, ShowSearch } from './../../components';

function ShowsPage(props) {

  function handleSelect(genreName) {
    sessionStorage.setItem('genreName', genreName);
  }

  return (
    <main className='shows'>
      <div className='row'>
        <aside className='col-md-3'>
          <ShowSearch dispatch={props.dispatch} />
          <ShowsGenre 
            genres={props.media.genres} 
            dispatch={props.dispatch} 
            onSelect={handleSelect} 
          />
        </aside>
        <section className='col-md-9'>
          <div className='card shows-card'>
            <ShowsScroll 
              dispatch={props.dispatch} 
              media={props.media} 
            />
            <div 
              className='card-header' 
              id='genre-title'
            >
              {sessionStorage.getItem('genreName') ? (
                sessionStorage.getItem('genreName')
              ) : (
                'Trending'
              )}
            </div>
            <div className='card-body'>
              {props.media.selectedList ? (
                <ShowList list={props.media.selectedList} />
              ) : (
                <ShowList list={props.media.trending} />
              )}
            </div>
            <ShowsScroll 
              dispatch={props.dispatch} 
              media={props.media} 
            />
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