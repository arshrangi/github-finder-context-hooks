import React from 'react';
import PropTypes from 'prop-types';

/*converting this class based component to functional component*/

const UserItem = props => {
  /* Below line gets converted to : the above line 
  class UserItem extends Component {
  /* One way of defining state of a component
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    };
  }
  */

  /*This is before hard coded version  displaying the data from a 
  predefined state.
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center' style={{ padding: '15px' }}>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3 className='nes-text is-primary my-1'>{login}</h3>
        <div>
          <a href={html_url} className='nes-btn is-success my-1'>
            More About me
          </a>
        </div>
      </div>
    );
  }
  */
  //As this is a functional component now so we don't need render()
  //render()

  /*
    We can do this destructing while starting this arrow function. as
    const USerItem = ({ user: {login, avatar_url, html_url }}) => {
  */
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center' style={{ padding: '15px' }}>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3 className='nes-text is-primary my-1'>{login}</h3>
      <div>
        <a href={html_url} className='nes-btn is-success my-1'>
          More About me
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
