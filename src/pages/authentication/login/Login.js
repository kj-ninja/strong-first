import React from 'react';
import '../Auth.scss';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {login, authClearError} from '../../../store/actions/auth';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import Button from "react-bootstrap/Button";
import Footer from "../../../components/footer/Footer";
import Spinner from "../../../components/ui/spinner/Spinner";

const Schema = Yup.object({
    email: Yup.string()
        .email('Zły adres email')
        .required('Pole wymagane'),
    password: Yup.string()
        .required('Pole wymagane')
});

const Login = (props) => {

    if (props.loading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="login">
                <div className="login__container">
                    <h2>Zaloguj się</h2>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={Schema}
                        onSubmit={(values) => {
                            props.login(values);
                        }}
                    >
                        <Form className="login__form">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" id="email" className="login__input" onFocus={props.authClearError}/>
                            <p className="login__error-message">
                                <ErrorMessage name="email"/>
                            </p>
                            <label htmlFor="password">Hasło</label>
                            <Field name="password" type="password" id="password" className="login__input"/>
                            <p className="login__error-message">
                                <ErrorMessage name="password"/> <br/>
                                {props.error}
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

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        loading: state.auth.loading,
        isAuth: state.auth.token  !== null
    }
};

export default connect(mapStateToProps, {login, authClearError})(Login);
