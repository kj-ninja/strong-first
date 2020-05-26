import React from 'react';
import './BigSixMobile.scss';
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BigSixMobile = () => {
    return (
        <>
            <HamburgerMenu/>
            <section className="big-six--mobile">
                <h2>Wielka szóstka</h2>
                <p className="big-six__description--mobile">
                    W prezentowanym systemie występuje sześć zasadniczych ćwiczeń, z których korzystamy do trenowania
                    całego
                    ciała - od mięśni na czaszcze do palćów stóp!
                </p>
                <div className="big-six__container--mobile">
                    <Row>
                        <Col xs={4} className="big-six__exercise">Pompki</Col>
                        <Col>Mięśnie piersiowe, obojczykowa część mięśnia naramiennego, triceps</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="big-six__exercise">Przysiady</Col>
                        <Col>Mięśnie czworogłowe uda, pośladkowe, mięśnie tylnej i przyśrodkowej grupy ud, łydki,
                            stopy</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="big-six__exercise">Podciągnięcia</Col>
                        <Col>Mięsień najszerszy grzbietu, obły, czworoboczny i równoległoboczny, bicepsy, mięśnie
                            przedramion i dłoni</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="big-six__exercise">Wznosy nóg</Col>
                        <Col>Mięsień prosty brzucha, mięśnie skośne, zębate, międzyżebrowe, przepona, mięsień prosty
                            uda, krawiecki, cały kompleks z przodu bioder</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="big-six__exercise">Mostek</Col>
                        <Col>Wszystkie mięśnie kręgosłupa, dolnej partii pleców i tyłu bioder oraz dwugłowy uda</Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="big-six__exercise">Pompki w staniu na rękach</Col>
                        <Col>Triceps, cała obręcz barkowa, mięśnie czworoboczny, dłoni, palców i przedramion</Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default BigSixMobile;