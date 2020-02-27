import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Header from "../Header/Header";

const LoginForm = () => {
    return (
        <>
            <Header isRegister={true}
                    logoStyles={{color: '#fff'}}
                    navbarStyles={{marginBottom: '50px', backgroundColor: 'rgb(63, 127, 191)'}}
                    containerStyles={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            />
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
                                <MDBBtn color="primary">Zaloguj się</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default LoginForm;
