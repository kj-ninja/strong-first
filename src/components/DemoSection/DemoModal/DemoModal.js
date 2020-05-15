import React from "react";
import './DemoModal.scss';
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const DemoModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=s7Z75i_xYZg"
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={true}
                />
            </Modal.Body>
        </Modal>
    );
}

export default DemoModal;