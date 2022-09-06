import {
    SIGNUP,
    SIGNIN,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT,
  } from './types';
  import axios from 'axios';
import { api } from '../utilities';

  
  export const signup = (name,email,password) => async (dispatch) => {
    try {
      const res = await axios.post(api.SIGNUP_URL, {name,email,password});
     console.log(res);
      dispatch({
        type: SIGNUP,
        payload: res.data,
      });
    }  catch (error) {
      // const errors = error.response.data.errors;
      // console.log(error.response.data.errors);
      if (error) {
  
        console.log(error);
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
  
  export const signin = (body) => async (dispatch) => {
   
    try {
        
      const res = await axios.post(api.LOGIN_URL, body);
      console.log(res);
      localStorage.setItem("isAuth",JSON.stringify(res.data));
      dispatch({
        type: SIGNIN,
        payload: res.data,
      });
    } catch (error) {
      const errors = error.response.data.errors;
  
      if (errors) {
        errors.forEach((err) => console.log(err));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
  
  export const logout = () => async (dispatch) => {
  
    dispatch({
      type: LOGOUT,
    });
    localStorage.removeItem('token');
  };
  