import { createStore } from "redux";

import conterReducer from './counter';

const store = createStore(conterReducer);

export default store;



