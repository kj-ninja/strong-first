import React from "react";
import './Footer.scss';

const Footer = (props) => {
    return (
        <footer className={props.relative ? 'footer__relative' : 'footer__absolute'}>
            <div className='footer__copyright'>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
            </div>
        </footer>
    );
};

export default Footer;