import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


const MovieList = (props) => (
    <div className="card-deck">
        {props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;