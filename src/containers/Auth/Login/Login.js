import React, {useState} from 'react';
import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import firebase from '../../../api/firebase';
import useWindowWith from '../../../functions/hooks/useWindowWidth';
import {translate} from '../../../functions/translate';
import Button from "react-bootstrap/Button";
import Footer from "../../../components/Footer/Footer";

const Schema = Yup.object({
    email: Yup.string()
        .email('Zły adres email')
        .required('Pole wymagane'),
    password: Yup.string()
        .required('Pole wymagane')
});

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const width = useWindowWith();
    let styles = {
        top: "100px"
    };

    if (width < 600) {
        styles = {top: 0}
    }
    return (
        <>
            <section className="login">
                <div className="login__container" style={{...styles}}>
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
            </section>
            <Footer bottom={0}/>
        </>
    );
};

export default Login;