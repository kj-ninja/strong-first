import React, {useState} from 'react';
import './DemoSection.scss';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";

const DemoSection = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        setPlaying(prevState => !prevState);
    }

    const handlePlay = () => {
        setPlaying(true);
    }

    const handlePause = () => {
        setPlaying(false);
    }

    return (
        <section className="demo">
            <div className="demo__container">
                <div className="demo__header">
                    <h2>Obejrzyj demo</h2>
                </div>
                <div className="demo__movie">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=s7Z75i_xYZg"
                        controls={true}
                        width="100%"
                        height="100%"
                        playing={playing}
                        onPlay={handlePlay}
                        onPause={handlePause}
                    />
                </div>
                <div className="demo__button">
                    <Link to="/"><Button onClick={handlePlayPause} variant="primary">
                        {playing ? 'Zatrzymaj video' : 'Obejrzyj video'}
                    </Button></Link>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;