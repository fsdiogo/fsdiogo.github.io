import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Avatar.module.css';

const Avatar = (props) => (
    <img
        className={ styles.image }
        src={ props.img }
        alt={ props.alt } />
);

Avatar.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
};

export default Avatar;
