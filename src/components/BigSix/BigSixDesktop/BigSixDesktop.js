import React from 'react';
import './BigSixDesktop.scss';
import Header from "../../Header/Header";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import handleLogout from "../../../functions/logout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BigSixDesktop = () => {
    return (
        <section className="big-six--desktop">
            <Header logoLink={"/main"}>
                <div className="big-six__buttons--desktop">
                    <Link to="/big-six"><Button variant="primary">Wielka szóstka</Button></Link>
                    <Link to="/add-training"><Button variant="primary">Dodaj trening</Button></Link>
                    <Link to="/"><Button className="btn--logout" onClick={handleLogout} variant="secondary">Wyloguj się</Button></Link>
                </div>
            </Header>
            <h2>Wielka szóstka</h2>
            <p className="big-six__description">
                W prezentowanym systemie występuje sześć zasadniczych ćwiczeń, z których korzystamy do trenowania całego
                ciała - od mięśni na czaszcze do palćów stóp!
            </p>

            <Container>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm={3}>sm=8</Col>
                    <Col sm={9}>sm=4</Col>
                </Row>
            </Container>
        </section>
    );
};

export default BigSixDesktop;