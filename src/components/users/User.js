import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='nes-btn btn-light'>
          Back To Search
        </Link>
        <br />
        <br />
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio:</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='nes-btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {login && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {login && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-dark'>Following: {following}</div>
          <div className='badge badge-success'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-light'>Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};
