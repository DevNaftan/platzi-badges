import React from 'react';

import api from '../api';
import Badges from './Badges';

class BadgesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  render() {
    return (
      <Badges
        loading={this.state.loading}
        badges={this.state.data}
        error={this.state.error}
      />
    );
  }
}

export default BadgesContainer;
