import React from 'react';
import { Link } from 'react-router-dom';

import BadgesListItem from './BadgesListItem';

import './styles/BadgesList.css';

function BadgesList(props) {
  const badgesList = props.badges.slice().reverse();

  return (
    <ul className='BadgesList'>
      {badgesList.length === 0 && (
        <p className='empty-badges'>No badges found</p>
      )}
      {badgesList.map((badge) => {
        return (
          <li key={badge.id}>
            <Link to={`/badges/${badge.id}`}>
              <BadgesListItem badge={badge} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BadgesList;
