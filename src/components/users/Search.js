import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };
  onChange = e => {
    /*this is good if we have only one field in the form, if we have more than
      one, we use the later approach */
    //this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <div style={{ margin: '10px 0 50px 0' }}>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Find'
            className='nes-btn is-warning btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;

/* to make search functionality work, we need to push the value the user just 
entered to the main app component so that everything remains centralized.
*/
