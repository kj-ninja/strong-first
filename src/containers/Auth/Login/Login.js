import React from 'react';
import './Login.scss';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {login} from '../../../store/actions/auth';

import {Formik, Field, Form, ErrorMessage} from 'formik';
import useWindowWith from '../../../functions/hooks/useWindowWidth';
import Button from "react-bootstrap/Button";
import Footer from "../../../components/Footer/Footer";
import Spinner from "../../../components/UI/Spinner/Spinner";

const Schema = Yup.object({
    email: Yup.string()
        .email('Zły adres email')
        .required('Pole wymagane'),
    password: Yup.string()
        .required('Pole wymagane')
});

const Login = (props) => {
    const width = useWindowWith();
    let styles = {
        top: "100px"
    };

    if (width < 600) {
        styles = {top: 0}
    }

    if (props.loading) {
        return <Spinner />;
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
                            props.login(values);
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
        token: state.token,
        userId: state.userId,
        error: state.error,
        loading: state.loading
    }
};

export default connect(mapStateToProps, {login})(Login);