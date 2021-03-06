import React from 'react';

import './styles/NotFound.css';
import NotFoundImage from '../assets/images/not-found.webp';

function NotFound() {
  return (
    <main className='NotFound'>
      <figure className='NotFound__img'>
        <img src={NotFoundImage} alt='Not found' />
      </figure>
      <div className='NotFound__info'>
        <h1>Hmmm!</h1>
        <p>No encontramos lo que buscabas.</p>
      </div>
    </main>
  );
}

export default NotFound;
