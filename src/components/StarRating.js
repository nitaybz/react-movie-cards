import React from 'react';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px',
        cursor: 'pointer'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const StarRating = (props) => {

    const containerStyle = { width: `${cropWidth(props.rating)}px` };
    
    return (
        <div>
            <div style={styles.starsOuter}>
                <div style={containerStyle}>
                    <div style={styles.starsEmptyInner}>
                        <i id={'1_'+props.movieIndex} className="fa fa-star-o fa-lg" style={styles.star} onClick={props.setRating}></i>
                        <i id={'2_'+props.movieIndex} className="fa fa-star-o fa-lg" style={styles.star} onClick={props.setRating}></i>
                        <i id={'3_'+props.movieIndex} className="fa fa-star-o fa-lg" style={styles.star} onClick={props.setRating}></i>
                        <i id={'4_'+props.movieIndex} className="fa fa-star-o fa-lg" style={styles.star} onClick={props.setRating}></i>
                        <i id={'5_'+props.movieIndex} className="fa fa-star-o fa-lg" style={styles.star} onClick={props.setRating}></i>
                    </div>
                    <div style={styles.starsInner}>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarRating;