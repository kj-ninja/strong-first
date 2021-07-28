import React from 'react';
import {Link} from "react-router-dom";
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import './NotFound.scss';

const NotFound = ({title, text, status}) => {
  return (
    <Result
      status={status || "404"}
      title={title || "error 404"}
      subTitle={text || "Coś tu poszło nie tak jak planowaliśmy Mistrzu"}
      extra={<Link to={"/"}><Button type="primary">Strona główna</Button></Link>}
      className="error-container"
    />
  );
};

export default NotFound;

