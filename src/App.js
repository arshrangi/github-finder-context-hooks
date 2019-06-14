import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import Users from './components/users/Users';

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
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
