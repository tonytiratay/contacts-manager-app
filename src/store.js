import { createStore, applyMiddleware }   from 'redux';
import { composeWithDevTools }       from 'redux-devtools-extension';
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;