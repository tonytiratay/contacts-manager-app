import { createStore, applyMiddleware }   from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers)
;
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store)
