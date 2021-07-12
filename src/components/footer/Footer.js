import React from "react";
import {withRouter} from 'react-router-dom';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer style={{bottom: props.bottom}}>
      <div className={props.history.location.pathname === '/' ? "footer__container" : "footer__container center"}>
        <div className='footer__copyright'>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> kj-ninja </a>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
