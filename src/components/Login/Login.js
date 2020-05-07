import React, {useContext, useState} from 'react';
// import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import FirebaseAuthContext from "../Firebase/auth";

const Login = () => {
    const auth = useContext(FirebaseAuthContext);
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <>
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
                        // firebase.auth().signIn();
                        auth.signInWithEmailAndPassword(values.email, values.password)
                            .then(res => {
                                console.log(auth.currentUser);
                                window.location.href = 'http://localhost:3000/#/main';
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }}
                >
                    <Form className="login__form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" id="email"/>
                        <p className="error-message">
                            <ErrorMessage name="email"/>
                        </p>
                        <label htmlFor="password">Hasło</label>
                        <Field name="password" type="password" id="password"/>
                        <p className="error-message">
                            <ErrorMessage name="password"/>
                            {errorMessage}
                        </p>
                        <div className="login__buttons">
                            <Button type="submit" variant="outline-secondary" size="lg">Zaloguj się</Button>
                            <Link to="/rejestracja"><Button variant="outline-secondary" size="lg">Załóż
                                konto</Button></Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default Login;