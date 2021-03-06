import React from 'react';
import FilterBar from './FilterBar';

import './styles/Hero.css';

function Hero(props) {
  return (
    <section className='Hero Hero--Badges'>
      <div className='Hero__container'>
        <figure className='platziconf-logo'></figure>
        {props.origin === 'BadgeDetails' && (
          <strong className='user-name user-name--BadgeDetails'>
            {props.firstName} {props.lastName}
          </strong>
        )}
        {props.origin === 'Badges' && (
          <FilterBar value={props.value} onChange={props.onChange} />
        )}
      </div>
    </section>
  );
}

export default Hero;
