import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <figure className={props.className}>
      <img
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt={props.alt}
      />
    </figure>
  );
}

export default Gravatar;
