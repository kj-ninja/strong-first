import React from "react";
import {withRouter} from 'react-router-dom';
import './Footer.scss';
import {animateScroll as scroll} from "react-scroll";

const Footer = (props) => {
    return (
        <footer style={{bottom: props.bottom}}>
            <div className={props.history.location.pathname === '/' ? "footer__container" : "footer__container center"}>

                <div className='footer__copyright'>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
                </div>
                {props.history.location.pathname === '/' ? <p onClick={() => {
                    scroll.scrollToTop();
                }}>
                    Back to top
                </p> : null}
            </div>
        </footer>
    );
};

export default withRouter(Footer);