import React from 'react';
import PropTypes from 'prop-types';

// Components
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Styles
import styles from './SocialLink.module.css';

const SocialLink = (props) => (
    <a className={ styles.link }
        href={ props.href }
        target={ props.name !== 'email' ? '_blank' : undefined }
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={ props.icon } />
    </a>
);

SocialLink.propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.object,
};

export default SocialLink;
