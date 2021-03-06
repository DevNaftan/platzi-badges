import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import BadgesList from '../components/BadgesList';
import PageLoader from '../components/PageLoader';
import PageError from '../components/PageError';

import './styles/Badges.css';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function Badges(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);

  return (
    <main className='Badges'>
      {props.loading && <PageLoader />}
      {props.error && <PageError error={props.error} />}
      {!props.loading && !props.error && (
        <>
          <Hero
            origin='Badges'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <section className='Badges__container'>
            <Link to='/badges/new' className='btn btn--Badges'>
              Add new attendant
            </Link>
            <BadgesList badges={filteredBadges} />
          </section>
        </>
      )}
    </main>
  );
}

export default Badges;
