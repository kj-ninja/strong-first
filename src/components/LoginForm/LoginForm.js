import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link} from "react-router-dom";
import './LoginForm.scss';

const LoginForm = () => {

    return (
        <>
            <nav className="login__nav">
                <div className="container login__header-wrapper">
                    <h1 className="login__header-logo"><Link to="/">Calisthenics</Link></h1>
                </div>
            </nav>

            <MDBContainer>
                <MDBRow display="flex" style={{justifyContent: "center"}}>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Zaloguj się</p>
                            <div className="grey-text">
                                <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Hasło" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <Link to="/main"><MDBBtn color="primary">Zaloguj się</MDBBtn></Link>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default LoginForm;
