import React, {useState} from 'react';
import './DemoSection.scss';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import DemoModal from "./DemoModal/DemoModal";

const DemoSection = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <section className="demo">
                <div className="demo__container">
                    <div className="demo__header">
                        <h2>Obejrzyj demo</h2>
                    </div>
                    <div className="demo__movie" onClick={() => setModalShow(true)}>
                        Tutaj bedzie screen z ikonka playera
                    </div>
                    <div className="demo__button">
                        <Link to="/"><Button onClick={() => setModalShow(true)} variant="primary">
                            Obejrzyj video
                        </Button></Link>
                    </div>
                </div>
            </section>
            <DemoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default DemoSection;