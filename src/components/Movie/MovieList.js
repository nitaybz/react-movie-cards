import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


const MovieList = (props) => (
    <div className="card-deck">
        {props.movies.map(movie => <MovieCard key={props.movies.indexOf(movie)}  movieIndex={props.movies.indexOf(movie)} movie={props.movies[props.movies.indexOf(movie)]} />)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;