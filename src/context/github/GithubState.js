import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async text => {
    //this.setState({ loading: true });
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //this.setState({ users: response.data.items, loading: false });
    //setUsers(response.data.items);
    //setLoading(false);
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    });
  };

  //Get USer //get a single github user
  const getUser = async username => {
    //this.setState({ loading: true });
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //this.setState({ user: response.data, loading: false });
    //setUser(response.data);
    //setLoading(false);
    dispatch({
      type: GET_USER,
      payload: response.data
    });
  };

  //Get Repos//get user repos from github api
  const getUserRepos = async username => {
    //this.setState({ loading: true });
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //this.setState({ repos: response.data, loading: false });
    //setRepos(response.data);
    //setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: response.data
    });
  };

  //Clear Users
  const clearUsers = () => {
    //this.setState({ users: [], loading: false });
    //setUsers([]);
    //setLoading(false);
    dispatch({
      type: CLEAR_USERS
    });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
