import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { connect } from 'react-redux';

class Movies extends Component {

    componentDidMount() {
        const movies = MovieService.getMovies();
        this.props.storeMovies(movies);
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
        movies: state ? state.movies : []
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        storeMovies: (movies) => {
            dispatch({
                type: 'STORE_MOVIES',
                payload: { movies }
            });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Movies);