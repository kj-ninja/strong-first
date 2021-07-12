import React from 'react';
import './Home.scss';
import 'react-image-lightbox/style.css';
import Footer from "../footer/Footer";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
  return (
    <>
      <div className="overlay"/>
      <Jumbotron className="hero">
        <div className="hero__para">
          <h2>Strong First</h2>

          <p>to łatwy w użyciu i szybki w działaniu dzienniczek sportowy.
            Zacznij już dziś kontrolować swój postęp siłowy.</p>
        </div>
      </Jumbotron>

      <Footer/>
    </>
  )
}

export default Home;
