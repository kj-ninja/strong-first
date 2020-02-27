import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Header from "../components/Header/Header";

const RegisterForm = () => {
    return (
        <>
            <Header isRegister={true}
                    logoStyles={{color: '#fff'}}
                    navbarStyles={{marginBottom: '50px', backgroundColor: 'rgb(63, 127, 191)'}}
                    containerStyles={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
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
                                <MDBInput label="Potwierdź swój email" icon="exclamation-triangle" group type="text" validate
                                          error="wrong" success="right" />
                                <MDBInput label="Hasło" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Zarejestruj się</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default RegisterForm