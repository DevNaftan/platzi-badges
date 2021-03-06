import React from 'react';

import Gravatar from '../components/Gravatar';

import './styles/Badge.css';
import './styles/BadgeDesktop.css';
import platziConfBadgeLogo from '../assets/images/platziconf-badge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Badge(props) {
  return (
    <div className='Badge Badge--BadgeNew Badge--BadgeEdit'>
      <div className='Badge__header'>
        <figure>
          <img src={platziConfBadgeLogo} alt='PlatziConf logo' />
        </figure>
      </div>
      <div className='Badge__main'>
        <div className='Badge__user'>
          <Gravatar
            className='user-img'
            alt='User avatar'
            email={props.email}
          />
          <h1 className='user-name'>
            {props.firstName} <strong>{props.lastName}</strong>
          </h1>
        </div>
        <div className='Badge__description'>
          <p className='user-info'>{props.jobTitle}</p>
          <div className='user-sn user-sn--Badge'>
            <FontAwesomeIcon icon={faTwitter} />
            <a
              className='tw-user'
              href={`https://twitter.com/${props.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>@{props.twitter}</span>
            </a>
            <figure className='country-flag'></figure>
          </div>
        </div>
      </div>
      <div className='Badge__footer'>
        <p>#PlatziConf</p>
      </div>
    </div>
  );
}

export default Badge;
