import React, {useState} from 'react';
import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import firebase from '../Firebase/firebase';
import Header from "../Header/Header";

const styles = {
    backgroundColor: 'rgb(63, 127, 191)',
    color: "#fff"
};

const Login = (props) => {
    const [errorMessage] = useState(null);

    return (
        <>
            <Header logoLink={"/"} styles={styles}>
                <Link to="/register"><Button variant="light" style={{color: 'rgb(63, 127, 191)'}}>Zarejestruj się</Button></Link>
            </Header>

            <div className="login__container">
                <h2>Zaloguj się</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Zły adres email')
                            .required('Pole wymagane'),
                        password: Yup.string()
                            .required('Pole wymagane')
                    })}
                    onSubmit={(values) => {
                        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                            .then(res => {
                                res.user.getIdTokenResult()
                                    .then(res=>{
                                        localStorage.setItem('token', res.token);
                                        props.history.replace('/main');
                                    });
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }}
                >
                    <Form className="login__form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" id="email" className="login__input"/>
                        <p className="error-message">
                            <ErrorMessage name="email"/>
                        </p>
                        <label htmlFor="password">Hasło</label>
                        <Field name="password" type="password" id="password" className="login__input"/>
                        <p className="error-message">
                            <ErrorMessage name="password"/>
                            {errorMessage}
                        </p>
                        <div className="login__buttons">
                            <Button type="submit" variant="outline-secondary">Zaloguj się</Button>
                            <Link to="/rejestracja"><Button variant="primary">Załóż
                                konto</Button></Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Login;