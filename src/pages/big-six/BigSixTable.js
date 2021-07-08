import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Transition from "react-transition-group/cjs/Transition";
import BigSixIcons from "./big-six-icons/BigSixIcons";

const defaultStyleBigSixTable = {
    opacity: '1'
}
const transitionStylesBigSixTable = {
    entering: {opacity: 0, top: '-1000px'},
    entered: {opacity: 1, top: '0'},
    exiting: {opacity: 1, top: '0'},
    exited: {opacity: 0, top: '-1000px'}
};

const styles = {
    fontSize: '20px',
    marginTop: '30px',
    textAlign: 'center'
};

const BigSixTable = () => {
    return (
        <Transition in={true} timeout={50} appear={true} unmountOnExit={true}>
            {state => (
                <section className="big-six__cover" style={{
                    ...defaultStyleBigSixTable,
                    ...transitionStylesBigSixTable[state]
                }}>
                    <section className="big-six">
                        <h2>Wielka szóstka</h2>
                        <p className="big-six__description">
                            W prezentowanym systemie występuje sześć zasadniczych ćwiczeń, z których korzystamy do
                            trenowania
                            całego
                            ciała - od mięśni na czaszcze do palćów stóp!
                        </p>
                        <div className="big-six__container">
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Pompki</Col>
                                <Col>Mięśnie piersiowe, obojczykowa część mięśnia naramiennego, triceps</Col>
                            </Row>
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Przysiady</Col>
                                <Col>Mięśnie czworogłowe uda, pośladkowe, mięśnie tylnej i przyśrodkowej grupy ud,
                                    łydki,
                                    stopy</Col>
                            </Row>
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Podciągnięcia</Col>
                                <Col>Mięsień najszerszy grzbietu, obły, czworoboczny i równoległoboczny, bicepsy,
                                    mięśnie
                                    przedramion i dłoni</Col>
                            </Row>
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Wznosy nóg</Col>
                                <Col>Mięsień prosty brzucha, mięśnie skośne, zębate, międzyżebrowe, przepona, mięsień
                                    prosty
                                    uda, krawiecki, cały kompleks z przodu bioder</Col>
                            </Row>
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Mostek</Col>
                                <Col>Wszystkie mięśnie kręgosłupa, dolnej partii pleców i tyłu bioder oraz dwugłowy
                                    uda</Col>
                            </Row>
                            <Row>
                                <Col xs={4} lg={2} className="big-six__exercise">Pompki w staniu na rękach</Col>
                                <Col>Triceps, cała obręcz barkowa, mięśnie czworoboczny, dłoni, palców i
                                    przedramion</Col>
                            </Row>
                        </div>
                    </section>
                    <p style={styles}>Wybierz ćwiczenie!</p>
                    <BigSixIcons/>
                </section>
            )}
        </Transition>
    );
};

export default BigSixTable;
