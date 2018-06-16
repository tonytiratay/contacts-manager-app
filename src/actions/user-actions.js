export const REGISTER = 'REGISTER';


import axios from 'axios';

const initApi = function(token){
    return axios.create({
      baseURL: 'http://192.168.1.25:5000/api/',
      timeout: 1000,
      headers: {'Authorization': token}
    });
  }

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

 const getCurrent = function(token){
    return initApi(token).get('users/current')
      .then((res) => {
      	return {  ...res.data, token }
      })
      .catch( (err) => {
      	return {errors: true, data: err.response.data}
      })
  }

const postLogin = function(email, password){
	console.log('trying to log: ', email, password)
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

 


export async function register(email, password) {
	let register = await postRegister(email, password || '76845736JHGF');
	console.log('action register sent:', register)
	

  return { type: REGISTER, payload: register }
}
