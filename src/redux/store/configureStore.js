import { createStore, combineReducers, applyMiddleware } from 'redux';
import countReducer from '../reducers/countReducer';
import testReducer from '../reducers/testReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const rootReducer = combineReducers(
    {
        countReducer: countReducer,
        testReducer: testReducer
    }
);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store