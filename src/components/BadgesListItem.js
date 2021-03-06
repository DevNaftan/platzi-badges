import React from 'react';

import './styles/BadgesListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function BadgesListItem(props) {
  return (
    <>
      <figure className='user-img user-img--BadgesListItem'>
        <img src={props.badge.avatarUrl} alt='User avatar' />
      </figure>
      <div className='BadgesListItem__info'>
        <strong className='user-name user-name--BadgesListItem'>
          {props.badge.firstName} {props.badge.lastName}
        </strong>
        <div className='user-sn'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='tw-user tw-user--BadgesListItem'>
            @{props.badge.twitter}
          </span>
        </div>
        <p className='user-info user-info--BadgesListItem'>
          {props.badge.jobTitle}
        </p>
      </div>
    </>
  );
}

export default BadgesListItem;
