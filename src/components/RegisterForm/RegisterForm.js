import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Header from "../Header/Header";
import {Link, Redirect} from 'react-router-dom';
import Button from "react-bootstrap/Button";

const styles = {
    backgroundColor: 'rgb(63, 127, 191)',
    color: "#fff"
};

const RegisterForm = () => {
    return (
        <>
            <Header logoLink={"/"} styles={styles}>
                <Link to="/login"><Button variant="light" style={{color: 'rgb(63, 127, 191)'}}>Zaloguj się</Button></Link>
            </Header>

            <MDBContainer>
                <MDBRow display="flex" style={{justifyContent: "center"}}>
                    <MDBCol md="6">
                        <form className="register-form">
                            <p className="h5 text-center mb-4">Zarejestruj się</p>
                            <div className="grey-text">
                                <MDBInput label="Imię" icon="user" group type="text" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Hasło" icon="lock" group type="password" validate />
                                <MDBInput label="Potwierdź swoje hasło" icon="exclamation-triangle" group type="text" validate
                                          error="wrong" success="right" />
                            </div>
                            <div className="text-center">
                                <Link to="/main"><MDBBtn color="primary">Zarejestruj się</MDBBtn></Link>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default RegisterForm