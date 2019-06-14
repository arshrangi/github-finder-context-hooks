import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <h2 className='nes-text'>
        <i className={icon} /> {title}
      </h2>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'nes-icon github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
