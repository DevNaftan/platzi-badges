import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import PageLoader from '../components/PageLoader';
import PageError from '../components/PageError';

import './styles/BadgeDetails.css';
import './styles/BadgeDetailsDesktop.css';

function BadgeDetails(props) {
  return (
    <main className='BadgeDetails'>
      {props.loading && <PageLoader />}
      {props.error && <PageError error={props.error} />}
      {!props.loading && !props.error && (
        <>
          <Hero
            origin='BadgeDetails'
            firstName={props.badge.firstName.toUpperCase()}
            lastName={props.badge.lastName.toUpperCase()}
          />
          <section className='BadgeDetails__container'>
            <Badge
              firstName={props.badge.firstName.toUpperCase() || 'FIRST_NAME'}
              lastName={props.badge.lastName.toUpperCase() || 'SECOND_NAME'}
              email={props.badge.email.toLowerCase() || 'EMAIL'}
              jobTitle={props.badge.jobTitle.toUpperCase() || 'JOB_TITLE'}
              twitter={props.badge.twitter.toLowerCase() || 'twitter_user'}
            />
            <div className='BadgeDetails__controls'>
              <h3>Actions</h3>
              <div>
                <Link to={`${props.badge.id}/edit`} className='btn'>
                  Edit
                </Link>
                <button
                  onClick={props.onOpen}
                  type='button'
                  className='btn btn-warning'
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
          <DeleteBadgeModal
            isOpen={props.modalIsOpen}
            onClose={props.onClose}
            onDeleteBadge={props.onDeleteBadge}
            firstName={props.badge.firstName.toUpperCase()}
            lastName={props.badge.lastName.toUpperCase()}
          />
        </>
      )}
    </main>
  );
}

export default BadgeDetails;
