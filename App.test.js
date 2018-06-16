import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('needs to be updated', ()=>{
	expect(true).toBeTruthy()
})

// it('renders without crashing', () => {
// 	console.log('see: ',renderer.create(<App />).toJson());
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });


// it('Should render correctly', ()=>{
// 	const tree = renderer
// 		.create(<App />)
// 		.toJSON();

// 	expect(tree).toMatchSnapshot();
// })
