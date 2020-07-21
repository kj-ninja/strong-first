import React from "react";
import './Footer.scss';
import {animateScroll as scroll} from "react-scroll";

const Footer = (props) => {
    return (
        <footer style={{bottom: props.bottom}}>
            <div className="footer__container">

                <div className='footer__copyright'>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
                </div>
                <p onClick={() => {
                    scroll.scrollToTop();
                }}>
                    Back to top
                </p>
            </div>
        </footer>
    );
};

export default Footer;