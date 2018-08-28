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

    const containerStyle = { width: `${cropWidth(props.movie.rating)}px` };
    
    return (
        <div>
            <div style={styles.starsOuter}>
                <div style={containerStyle}>
                    <div style={styles.starsEmptyInner}>
                        {[1,2,3,4,5].map((starNumber) => 
                            <i className="fa fa-star-o fa-lg" key={props.movie.id + '_' + starNumber} style={styles.star} onClick={() => { props.setRating(starNumber, props.movie.id); }}></i>
                        )}
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