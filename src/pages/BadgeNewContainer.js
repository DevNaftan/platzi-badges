import React from 'react';
import md5 from 'md5';

import api from '../api';
import BadgeNew from './BadgeNew';

class BadgeNewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      check: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
        avatarUrl: '',
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
        avatarUrl: `https://www.gravatar.com/avatar/${md5(
          this.state.form.email
        )}?d=identicon`,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !this.state.form.firstName.length > 0 ||
      !this.state.form.lastName.length > 0 ||
      !this.state.form.email.length > 0 ||
      !this.state.form.jobTitle.length > 0 ||
      !this.state.form.twitter.length > 0
    ) {
      return this.setState({
        error: 'You must fill in all the fields.',
      });
    }

    if (!this.state.check) {
      return this.setState({
        error: 'You must accept the terms of service and the privacy policy.',
      });
    }

    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  handleCheck = (e) => {
    e.target.checked
      ? this.setState({ check: true })
      : this.setState({ check: false });
  };

  render() {
    return (
      <BadgeNew
        loading={this.state.loading}
        badge={this.state.form}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        check={this.state.check}
        isChecked={this.handleCheck}
      />
    );
  }
}

export default BadgeNewContainer;
