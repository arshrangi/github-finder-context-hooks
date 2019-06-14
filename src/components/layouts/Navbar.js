import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  render() {
    return (
      <nav className='nes-text'>
        <h2 className='nes-text'>
          <i className={this.props.icon} /> {this.props.title}
        </h2>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
