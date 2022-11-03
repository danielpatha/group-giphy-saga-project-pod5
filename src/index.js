import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



function* searchGiphy(){
    console.log('in searchGiphy');

    let response = yield axios.get('/api/category');
    console.log('GET response:', response);

    yield put({
        type: 'SET_GIPHY',
        payload: response.data
    });

}



function* rootSaga() {
    console.log('in rootSaga');

    yield takeEvery('SEARCH_GIPHY', searchGiphy);
    // yield takeEvery('ADD_FRUIT', addFruit);
    // yield takeEvery('REMOVE_FRUIT', removeFruit);

}

const sagaMiddleware = createSagaMiddleware();




const storeInstance = createStore(
    combineReducers({
        
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
