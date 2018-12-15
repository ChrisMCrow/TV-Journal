import React from 'react';
import HomeMyActivity from './HomeMyActivity';
import HomeFeed from './HomeFeed';
import HomeTrends from './HomeTrends';

function HomePage() {
  return(
    <div>
      <style jsx>{`

      `}</style>
      <div className='row'>
        <div className='col-4'>
          <HomeMyActivity />
        </div>
        <div className='col-4'>
          <HomeFeed />
        </div>
        <div className='col-4'>
          <HomeTrends />
        </div>
      </div>
    </div>
  );
}

export default HomePage;