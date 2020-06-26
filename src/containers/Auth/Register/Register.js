import React from "react";
import './Register.scss';
import {connect} from 'react-redux';
import {register, authClearError} from "../../../store/actions/auth";
import {Formik} from "formik";
import * as Yup from "yup";
import useWindowWidth from "../../../functions/hooks/useWindowWidth";
import Button from "react-bootstrap/Button";
import Footer from "../../../components/Footer/Footer";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {Redirect} from "react-router-dom";

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
    const width = useWindowWidth();
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
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    changepassword: ""
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    props.register(values);
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
                                        onFocus={props.authClearError}
                                    />
                                    <p className="register__error-message">
                                        {errors.email}
                                        {props.error}
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
                                    </p>
                                    <div className="register__buttons">
                                        <Button type="submit" variant="outline-secondary">Załóż konto</Button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    );
                }}
            </Formik>
            <Footer bottom={0}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        loading: state.auth.loading,
        isAuth: state.auth.token  !== null
    }
};

export default connect(mapStateToProps, {register, authClearError})(Register);