import React from 'react';
import { defaultUser } from './user-reducers';
import userReducer from './user-reducers';

describe('User reducer', ()=>{

	it('registration should return errors', ()=>{
		
		let action = {
			type: 'REGISTER',
			payload: {
				errors: true,
				email: "mon@mail.com",
				_id: 'kljlkjfljlzejzlf786!',
				token: 'Bearer KJHHDGhjgshgzhjd!è§çzè',
				data: { password: "password did not match" }
			}
		};

		let expectedResult = {
					...defaultUser,
					loading: false,
					errors: action.payload.data
		};

		expect(userReducer(defaultUser, action)).toMatchObject(expectedResult)
	});



	it('registration should return a user', ()=>{
		
		let action = {
			type: 'REGISTER',
			payload: {
				email: "mon@mail.com",
				_id: 'kljlkjfljlzejzlf786!',
				token: 'Bearer KJHHDGhjgshgzhjd!è§çzè',
				data: { password: "password did not match" }
			}
		};

		let { _id, email, token } = action.payload;

		let expectedResult = {
					...defaultUser,
					loading: false,
					email,
					_id,
					token,
		};

		expect(userReducer(defaultUser, action)).toMatchObject(expectedResult)
	})



	it('Should reset the user', ()=>{

		let action = { type: 'LOGOUT' };

		expect(userReducer(defaultUser, action)).toMatchObject(defaultUser);
	})



	it('Should reset the errors', ()=>{

		let action = { type: 'CLEAR ERRORS' };

		expect(userReducer(defaultUser, action)).toMatchObject({...defaultUser, errors: false});
	})



	it('Should return loading', ()=>{

		let action = { type: 'LOADING', payload: true };

		expect(userReducer(defaultUser, action)).toMatchObject({...defaultUser, loading: true});
	})



	it('Should not return loading', ()=>{

		let action = { type: 'LOADING', payload: false };

		expect(userReducer(defaultUser, action)).toMatchObject({...defaultUser, loading: false});
	})



})
