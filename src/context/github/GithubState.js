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
import { tsPropertySignature } from '@babel/types';

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

  //Get USer

  //Get Repos

  //Clear Users

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
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
