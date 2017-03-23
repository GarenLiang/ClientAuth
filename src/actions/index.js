import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    //submit email and password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //if request is good
        //update state
        dispatch({ type: AUTH_USER });
        //save jwt token
        //redirect route
        browserHistory.push('/feature');
      })
      .catch(() => {
        //if request is bad
        //show an error to user
      });
  }
}
