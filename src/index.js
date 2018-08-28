import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    movies: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_RATING': {
        const movie = state.movies.find((mov) => {
            return mov.id === action.payload.id;
        });
        var newState = { movies: state.movies.map((movie) => { return Object.assign({}, movie); }) };
        newState.movies[state.movies.indexOf(movie)].rating = action.payload.rating;
        return newState;
    }
    case 'STORE_MOVIES': {
        return {
            movies: [
                ...state.movies,
                ...action.payload.movies
            ]
        };
    }
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
