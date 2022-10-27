// import { createStore, applyMiddleware } from "redux";
// import cardsReducer from "./Redusers";
// import createSagaMiddleware from "redux-saga";
// import {rootSaga} from "../saga/index";

// const sagaMiddleware = createSagaMiddleware();

// const middleWare = applyMiddleware(sagaMiddleware);

// const store = createStore(cardsReducer, middleWare);

// sagaMiddleware.run(rootSaga);

// export default store;

import { createStore} from 'redux';
import bookReducer from './reducers/reducers';


export default createStore(bookReducer)