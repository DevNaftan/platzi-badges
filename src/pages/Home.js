import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import './styles/HomeTablet.css';
import './styles/HomeDesktop.css';

function Home() {
  return (
    <main className='Home'>
      <section className='Home__container'>
        <div className='Home__info-container'>
          <figure className='platziconf-logo platziconf-logo--Home'></figure>
          <div className='Home__info'>
            <h1>Print your Badges</h1>
            <p>The easiest way to manage your conference</p>
          </div>
          <Link to='/badges' className='btn'>
            Start Now
          </Link>
        </div>
        <figure className='Home__logo'></figure>
      </section>
    </main>
  );
}

export default Home;
