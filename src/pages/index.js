import React from 'react';

// Components
import Avatar from '../components/Avatar/Avatar';
import SocialLink from '../components/SocialLink/SocialLink';

// Styles
import styles from './index.module.css';

// Assets
import profilePic from '../media/diogo.jpg';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEmail from '@fortawesome/fontawesome-free-regular/faEnvelope';

const SOCIAL_LINKS = [
    { name: 'github', href: 'https://github.com/fsdiogo', icon: faGithub },
    { name: 'linkedin', href: 'https://linkedin.com/in/fsdiogo', icon: faLinkedIn },
    { name: 'twitter', href: 'https://twitter.com/_fsdiogo', icon: faTwitter },
    { name: 'instagram', href: 'https://instagram.com/_fsdiogo', icon: faInstagram },
    { name: 'email', href: 'mailto:fsdiogo@gmail.com?subject=Hey%20Diogo!', icon: faEmail },
];

const IndexPage = () => (
    <div className={ styles.container }>
        <div className={ styles.wrapper }>
            <Avatar img={ profilePic } alt="Diogo" />

            <h1 className={ styles.hero }>Diogo <span>&#9830;</span> Silva</h1>

            <p className={ styles.tagline }>
                Software Engineer by day
                <span>&amp;</span>
                Sleep Master by night
            </p>

            <div className={ styles.brands }>
                { SOCIAL_LINKS.map((link) => (
                    <SocialLink
                        key={ `social-${link.name}` }
                        name={ link.name }
                        href={ link.href }
                        icon={ link.icon } />
                )) }
            </div>
        </div>
    </div>
);

export default IndexPage;
