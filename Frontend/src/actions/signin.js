import {
    SIGNUP,
    SIGNIN,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT,
  } from './types';
  import axios from 'axios';


  
  export const signup = (name,email,password) => async (dispatch) => {
    try {
      const res = await axios.post('/auth/signup', {name,email,password});
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
  
  export const signin = (email,password) => async (dispatch) => {
   
    try {
        
      const res = await axios.post('/auth/login', {email,password,isOAuth:true});
      console.log(res);
      dispatch({
        type: SIGNIN,
        payload: res.data,
      });
      localStorage.setItem("isAuth",JSON.stringify(res.data));
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
  
  export const Logout = () => async (dispatch) => {
  
    dispatch({
      type: LOGOUT,
    });
    localStorage.removeItem('token');
  };
  