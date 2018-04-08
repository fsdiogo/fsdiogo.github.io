import React from 'react';
import PropTypes from 'prop-types';

// Components
import Helmet from 'react-helmet';

// Styles
import styles from './index.module.css';

const Template = ({ children }) => (
    <div className={ styles.layout }>
        <Helmet
            title="Diogo Silva"
            meta={ [
                { name: 'description', content: 'My collection of thoughts' },
                { name: 'keywords', content: 'diogo, silva, gatsby, react, website, blog, collection, thoughts' },
            ] } />

        { children() }
    </div>
);

Template.propTypes = {
    children: PropTypes.func,
};

export default Template;
