import React from 'react';

function PageError(props) {
  return (
    <section className='section-container'>
      <p className='error-message'>{props.error}</p>
    </section>
  );
}

export default PageError;
