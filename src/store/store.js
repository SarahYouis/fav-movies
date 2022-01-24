import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import FavReducer from './reducer/FavouritReducer';

const store = createStore(FavReducer,composeWithDevTools())

    
export default store;