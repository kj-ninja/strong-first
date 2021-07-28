import React from "react";
import {withRouter} from 'react-router-dom';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer style={{bottom: props.bottom}}>
      <div className="footer__container">
        <div className='footer__copyright'>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
