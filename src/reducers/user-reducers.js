import { REGISTER } from '../actions/user-actions';

const defaultUser = {
	token: false,
	email: '', 
	_id: '', 
	errors: false,
};

export default function user(state = defaultUser, action){

	switch (action.type){

		case REGISTER:
			console.log('reducer check mail received: ', action.payload);
			let { errors, data, token, _id, email } = action.payload;
			if (errors) {
				return {
					...defaultUser,
					errors: data
				}
			} else {
				return {
					...defaultUser,
					token,
					_id,
					email
				}
			}
			return state
		break;

		default:
		return state;

	}

}