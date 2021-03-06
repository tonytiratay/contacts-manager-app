export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const LOADING = 'LOADING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

import axios from 'axios';

// ************************************************

// ACTIONS ARE RIGHT HERE, AND FUNCTIONS USED BY THE ACTIONS ARE BELOW

// ************************************************

export async function register(email, password) {
	let register = await postRegister(email, password);
	return { type: REGISTER, payload: register }
};

export function logout(){
	return { type: LOGOUT }
};

export function setLoading(bool){
	return { type: LOADING, payload: bool }
};

export function clearErrors(bool){
  return { type: CLEAR_ERRORS }
};


// ************************************************

// HERE ARE THE FUNCTIONS USED BY THE ACTIONS

// ************************************************



// This is used by all the functions underneath
// It prepares the api url for the calls
// And allows for an authorization token to be provided

export const initApi = function(token){
    return axios.create({
      baseURL: 'http://192.168.1.25:5000/api/',
      timeout: 1000,
      headers: {'Authorization': token}
    });
  }


// This function will try to register the user given email and password params.
// If the api calls responds with an error saying "email exists", it tries to log the user
// If not, it returns the api erros

export const postRegister = function(email, password){
    return initApi().post('/users/register', {
      email,
      password,
      password2: password,
    })
      .then((res) => { // Registration succeeded
        
        if (res.data) {
          return result =  postLogin(email, password);
        }

      })
      .catch((err) => { // Registration failed
        let data = err && err.response && err.response.data ? err.response.data : err; 
        let exists = data && data.email && data.email.includes('already exists') || false;
        
        if (exists) { // If failed beacause user already exists, try to login

           return result = postLogin(email, password)
        
        } else {
        	
          return {errors: true, data}

        }
      })
  }

// This function will try to login the user given email and password params.
// If the api calls ends with success, calls the "Get current user" method
// If not, it returns the api erros

export const postLogin = function(email, password){
    return initApi().post('/users/login', {
      email,
      password,
    })
      .then((res) => { // Login succeeded, try to fetch user infos
        return result =  getCurrent(res.data.token);
      })
      .catch( (err) => { // Login failed
      	return {errors: true, data: err.response.data}
      })
  }

// This function will send user info if provided with a token
// Else will throw error

export const getCurrent = function(token){
	return initApi(token).get('users/current')
	  .then((res) => { // Fetched infos
	  	return {  ...res.data, token }
	  })
	  .catch( (err) => { // Did not fetch infos
	  	return {errors: true, data: err.response.data}
	  })
}