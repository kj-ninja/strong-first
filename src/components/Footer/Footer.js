import React from "react";
import './Footer.scss';

const styles = {
    position: 'absolute',
    padding: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 -5px 40px #00000029',
    backgroundColor: '#fafbfc'
};

const Footer = (props) => {
    return (
        <footer style={{...styles, bottom: props.bottom}}>
            <div className='footer__copyright'>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
            </div>
        </footer>
    );
};

export default Footer;