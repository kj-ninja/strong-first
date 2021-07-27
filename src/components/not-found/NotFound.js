import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import './NotFound.scss';
import {Link} from "react-router-dom";

const NotFound = ({title, text, status}) => {
  return (
    <Result
      status={status ||"404"}
      title={title || "error 404"}
      subTitle={text || "Coś tu poszło nie tak jak planowaliśmy Mistrzu"}
      extra={<Link to={"/"}><Button type="primary">Strona główna</Button></Link>}
      className="error-container"
    />
  );
};

export default NotFound;

