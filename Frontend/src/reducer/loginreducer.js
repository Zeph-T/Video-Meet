import {
    SIGNIN,
    SIGNUP,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_FAIL,
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token') || "",
    isAuthenticated: false,
    loading: true,
    user: null,
  };
  
  const userSigninReducer= (state = initialState, action) =>{
    const { type, payload } = action;
  
    switch (type) {
      case SIGNUP: {
        localStorage.setItem('token', payload.token);
        console.log(payload.token);
        return {
          ...state,
          ...payload,
          loading: false,
        };
      }
      case SIGNIN: {
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
    }
      case (LOGIN_FAIL, REGISTER_FAIL, LOGOUT): {
        // localStorage.removeItem('token');
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          user: null,
          token: null,
        };
      }
      default:
        return state;
    }
  }
  
  export default userSigninReducer;