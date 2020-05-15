import React, {useState} from "react";
import './Register.scss';
import {Formik} from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import firebase from '../Firebase/firebase';
import {Link} from 'react-router-dom';
import Header from "../Header/Header";
import {translate} from '../../functions/translate';
import Footer from "../Footer/Footer";
import {isMobile} from "react-device-detect";

const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Email powinien być poprawny')
        .required('Pole jest wymagane'),
    password: Yup.string()
        .required("Pole jest wymagane")
        .min(6, 'Hasło powinno mieć minimum 6 znaków'),
    changepassword: Yup.string().when("password", {
        is: val => (!!(val && val.length > 0)),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Obydwa hasła powinny być takie same"
        )
    })
});

const Register = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);
    let styles = {
        top: "100px"
    };

    if (isMobile) {
        styles = {top: 0}
    }

    return (
        <>
            <Header logoLink={"/"}>
                <Link to="/login"><Button variant="primary">Zaloguj się</Button></Link>
            </Header>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    changepassword: ""
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                        .then(res => {
                            props.history.replace('/main');
                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            setErrorMessage(translate(error.code));
                        });
                }}
            >
                {({values, errors, handleSubmit, handleChange, handleBlur}) => {
                    return (
                        <section className="register">
                            <div className="register__container" style={{...styles}}>
                                <h2>Załóż konto</h2>
                                <form onSubmit={handleSubmit} className="register__form">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        className="register__input"
                                    />
                                    <p className="register__error-message">
                                        {errors.email}
                                        {errorMessage}
                                    </p>

                                    <label htmlFor="password">Hasło</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        className="register__input"
                                    />
                                    <p className="register__error-message">
                                        {errors.password}
                                        {errorMessage}
                                    </p>

                                    <label htmlFor="password">Powtórz hasło</label>
                                    <input
                                        type="password"
                                        name="changepassword"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.changepassword}
                                        className="register__input"
                                    />
                                    <p className="register__error-message">
                                        {errors.changepassword}
                                        {errorMessage}
                                    </p>
                                    <div className="register__buttons">
                                        <Link to="/register"><Button type="submit" variant="outline-secondary">Załóż
                                            konto</Button></Link>
                                    </div>
                                </form>
                            </div>
                        </section>
                    );
                }}
            </Formik>
            <Footer props={false}/>
        </>
    );
}

export default Register;