import React from 'react';

import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      data: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
      },
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  render() {
    return (
      <BadgeDetails
        loading={this.state.loading}
        badge={this.state.data}
        onOpen={this.handleOpenModal}
        onClose={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        error={this.state.error}
      />
    );
  }
}

export default BadgeDetailsContainer;
