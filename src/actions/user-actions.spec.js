import { register } from './user-actions';

describe('User actions', ()=>{

	it('should return erros', async ()=>{

		let registered = await register('mail', 'password');

		let expectedObject = {
			type: 'REGISTER',
			payload: {
				errors: true,
			}
		}

		expect(registered).toMatchObject(expectedObject)
	})



	// it('should return user', async ()=>{

	// 	let registered = await register('tony.tiratay@gmail.com', 'test123');

	// 	let expectedObject = {
	// 		type: 'REGISTER',
	// 		payload: {
	// 			token: 'jkdsfhjksf',
	// 		}
	// 	}

	// 	expect(registered).toMatchObject(expectedObject)
	// })	

})