import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_RATING':
        state[action.index].rating = action.payload;
        var newState = [
            ...state
        ];
        newState[action.index].rating = action.payload;
        return newState;
    case 'STORE_MOVIE':
        return state = [
            ...state,
            action.payload
        ];
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('Store Updated!', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);
