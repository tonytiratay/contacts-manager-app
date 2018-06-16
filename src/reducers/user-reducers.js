import { REGISTER, LOGOUT } from '../actions/user-actions';

const defaultUser = {
	token: false,
	email: '', 
	_id: '', 
	errors: false,
};

export default function user(state = defaultUser, action){

	switch (action.type){

		case REGISTER:
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

		case LOGOUT:
			return defaultUser;
		break;
		default:
		return defaultUser;

	}

}