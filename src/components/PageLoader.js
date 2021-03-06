import React from 'react';

import './styles/PageLoader.css';

function PageLoader() {
  return (
    <section className='section-container'>
      <div className='lds-grid'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default PageLoader;
