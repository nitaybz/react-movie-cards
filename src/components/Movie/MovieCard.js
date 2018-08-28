import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import { connect } from 'react-redux';

const MovieCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.movie.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating movieIndex={props.movieIndex} rating={props.movie.rating} setRating={(state) => props.setRating(state)} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        movies: state
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setRating: (e) => {
            var rating = e.target.id.split('_')[0];
            var index = e.target.id.split('_')[1];
            dispatch({
                type: 'SET_RATING',
                payload: rating,
                index: index
            });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);