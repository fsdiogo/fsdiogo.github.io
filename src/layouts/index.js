import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../media/favicon.ico';
import styles from './index.module.css';

const Template = ({ children }) => (
    <div className={ styles.layout }>
        <Helmet
            title="Diogo Silva"
            meta={ [
                { name: 'description', content: 'My website' },
                { name: 'keywords', content: 'fsdiogo, diogo, silva, gatsby, react, website' },
            ] }
            link={ [
                { rel: 'icon', type: 'image/x-icon', href: favicon },
            ] } />

        { children() }
    </div>
);

Template.propTypes = {
    children: PropTypes.func,
};

export default Template;
