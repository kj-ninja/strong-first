import React, {useState} from 'react';
import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import firebase from '../Firebase/firebase';
import Header from "../Header/Header";
import {translate} from '../../functions/translate';

const Schema = Yup.object({
    email: Yup.string()
        .email('Zły adres email')
        .required('Pole wymagane'),
    password: Yup.string()
        .required('Pole wymagane')
});

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <>
            <Header logoLink={"/"}>
                <Link to="/register"><Button variant="primary">Zarejestruj się</Button></Link>
            </Header>

            <div className="login__container">
                <h2>Zaloguj się</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                            .then(res => {
                                res.user.getIdTokenResult()
                                    .then(res => {
                                        localStorage.setItem('token', res.token);
                                        props.history.replace('/main');
                                    });
                            })
                            .catch(function (error) {
                                console.log(values);
                                setErrorMessage(translate(error.code));
                            });
                    }}
                >
                    <Form className="login__form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" id="email" className="login__input"/>
                        <p className="login__error-message">
                            <ErrorMessage name="email"/>
                        </p>
                        <label htmlFor="password">Hasło</label>
                        <Field name="password" type="password" id="password" className="login__input"/>
                        <p className="login__error-message">
                            <ErrorMessage name="password"/> <br/>
                            {errorMessage}
                        </p>
                        <div className="login__buttons">
                            <Button variant="outline-secondary" type="submit">Zaloguj się</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Login;