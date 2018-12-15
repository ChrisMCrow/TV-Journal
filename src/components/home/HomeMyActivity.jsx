import React from 'react';
import Daredevil from './../../assets/daredevil.jpg';
import ShowList from './../common/ShowList';

function HomeMyActivity() {

  const tempProps = {
    watchingNow: {
      id1: {
        title: 'Daredevil',
        img: Daredevil
      },
      id2: {
        title: 'Ozark',
        img: Daredevil
      },
      id3: {
        title: 'Game of Thrones',
        img: Daredevil
      }
    },
    watchingLater: {
      id4: {
        title: 'Schitt\'s Creek',
        img: Daredevil
      },
      id5: {
        title: 'Modern Family',
        img: Daredevil
      }
    }
  }

  return(
    <div className='section-container'>
      <style jsx>{`
      `}</style>
      <h1>My Activity</h1>
      <h2>Current Shows</h2>
      <ShowList shows={tempProps.watchingNow} />
      <h2>Shows I want to watch</h2>
      <ShowList shows={tempProps.watchingLater} />
    </div>
  );
}

export default HomeMyActivity;