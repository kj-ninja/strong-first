import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol>
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja"> KJ-ninja </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default FooterPage;