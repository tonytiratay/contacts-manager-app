export const REGISTER = 'REGISTER';

import axios from 'axios';

export async function register(email, password) {
	let register = await postRegister(email, password);
	return { type: REGISTER, payload: register }
};


// This is used by all the functions underneath
// It prepares the api url for the calls
// And allows for an authorization token to be provided

const initApi = function(token){
    return axios.create({
      baseURL: 'http://192.168.1.25:5000/api/',
      timeout: 1000,
      headers: {'Authorization': token}
    });
  }


// This function will try to register the user given email and password params.
// If the api calls responds with an error saying "eamil exists", it tries to log the user
// If not, it returns the api erros

const postRegister = function(email, password){
    return initApi().post('/users/register', {
      email,
      password,
      password2: password,
    })
      .then((res) => {
        if (res.data) {
          return result =  postLogin(email, password);
        }
      })
      .catch((err) => {
        let data = err.response.data; 
        let exists = data && data.email && data.email.includes('already exists') || false;
        
        if (exists) {
           return result = postLogin(email, password)
        } else {
        	return {errors: true, data}
        }
      })
  }

// This function will try to login the user given email and password params.
// If the api calls ends with success, calls the "Get current user" method
// If not, it returns the api erros

const postLogin = function(email, password){
    return initApi().post('/users/login', {
      email,
      password,
    })
      .then((res) => {
        return result =  getCurrent(res.data.token);
      })
      .catch( (err) => {
      	return {errors: true, data: err.response.data}
      })
  }

// This function will send user info if provided with a token
// Else will throw error

const getCurrent = function(token){
	return initApi(token).get('users/current')
	  .then((res) => {
	  	return {  ...res.data, token }
	  })
	  .catch( (err) => {
	  	return {errors: true, data: err.response.data}
	  })
}