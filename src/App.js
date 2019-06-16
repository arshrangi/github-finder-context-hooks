import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

/* converted this functional component to class based one.
function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
    </div>
  );
  
  //Another way of writing all the above is, but it became clumpsy as 
    markup content increases.
  React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'Hello, World!!')
    );
}
*/

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  /* we are going to use async await syntax, so refactor this
  componentDidMount() {
    axios
      .get('https://api.github.com/users')
      .then(response => console.log(response.data));
  }*/

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
