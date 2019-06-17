import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlertMsg }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlertMsg('Please enter something to search.', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div style={{ margin: '10px 0 50px 0' }}>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Find'
          className='nes-btn is-warning btn-block'
        />
        {showClear && (
          <button className='nes-btn is-error btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlertMsg: PropTypes.func.isRequired
};
