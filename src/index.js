// require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



function* searchGiphy(action){
    console.log('in searchGiphy', action.payload);

    let response = yield axios.get('/api/category', ({
        params: {
            q: action.payload
        } 
    }));

    console.log('response', response.data)

    yield put({
        type: 'SET_SEARCH',
        payload: response
    });

}

function* fetchGiphy(){
    let response = yield axios.get('/api/category');

    yield put({
        type: 'SET_SEARCH',
        payload: response.data
    });
}



function* rootSaga() {
    console.log('in rootSaga');

    yield takeEvery('SEARCH_GIPHY', searchGiphy);
    yield takeEvery('FETCH_GIPHY', fetchGiphy)
    // yield takeEvery('ADD_FRUIT', addFruit);
    // yield takeEvery('REMOVE_FRUIT', removeFruit);

}

const sagaMiddleware = createSagaMiddleware();


const giphyReducer = (state = {}, action) => {
    switch (action.type){
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        giphyReducer,
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
