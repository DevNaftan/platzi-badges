import React from 'react';

import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoader from '../components/PageLoader';

import './styles/BadgeNewEdit.css';
import './styles/BadgeNewEditDesktop.css';

function BadgeEdit(props) {
  return (
    <main className='BadgeNewEdit'>
      {props.loading && <PageLoader />}
      {!props.loading && (
        <>
          <Hero />
          <section className='BadgeNewEdit__container'>
            <Badge
              firstName={props.badge.firstName.toUpperCase() || 'FIRST_NAME'}
              lastName={props.badge.lastName.toUpperCase() || 'SECOND_NAME'}
              email={props.badge.email.toLowerCase() || 'EMAIL'}
              jobTitle={props.badge.jobTitle.toUpperCase() || 'JOB_TITLE'}
              twitter={props.badge.twitter.toLowerCase() || 'twitter_user'}
            />
            <BadgeForm
              onChange={props.handleChange}
              onSubmit={props.handleSubmit}
              formValues={props.badge}
              error={props.error}
              origin={'edit'}
              check={props.check}
              isChecked={props.isChecked}
            />
          </section>
        </>
      )}
    </main>
  );
}

export default BadgeEdit;
