import { REGISTER, LOGOUT, LOADING } from '../actions/user-actions';

const defaultUser = {
	token: false,
	email: '', 
	_id: '', 
	loading: false,
	errors: false,
};

export default function user(state = defaultUser, action){

	switch (action.type){

		case REGISTER:
			let { errors, data, token, _id, email } = action.payload;
			if (errors) {
				return {
					...defaultUser,
					loading: false,
					errors: data
				}
			} else {
				return {
					...defaultUser,
					loading: false,
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

		case LOADING:
			return { ...state, loading: true};
		break;

		default:
		return defaultUser;

	}

}