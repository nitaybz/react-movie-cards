import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { connect } from 'react-redux';

class Movies extends Component {

    componentDidMount() {
        MovieService.getMovies().map(movie => {
            this.props.storeMovie(movie);
        });
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.props.movies} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        storeMovie: (movie) => {
            dispatch({
                type: 'STORE_MOVIE',
                payload: movie
            });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Movies);