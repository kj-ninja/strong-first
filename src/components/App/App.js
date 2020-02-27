import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "../Header/Header";
import Main from "../Hero/Hero";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import Calendar from "../Calendar/Calendar";
import AddTraining from "../AddTraining/AddTraining";
import FooterPage from "../Footer/Footer";
import RegisterForm from "../../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

function App() {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState({});


    useEffect(()=> {
        fetch("https://ironman.coderaf.com/training")
            .then(response => response.json())
            .then(data => {
                setTrainingToShow(data[data.length-1]);
                setTrainings(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // add loading spinner
    if (trainings.length === 0) {
        return (
            <h1>Loading</h1>
        )
    }

  return (
        <>
            <Header isRegister={false}
                    isLogged={true}
                    containerStyles={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                    logoStyles={{color: '#fff'}}
                    navbarStyles={{marginBottom: '50px', backgroundColor: 'rgb(63, 127, 191)'}}
            />
            {/*<Main />*/}
            {/*<FooterPage />*/}
            <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow}/>
            <TrainingSummary trainingToShow={trainingToShow}/>
            <br/>
            <br/>
            <br/>
            <AddTraining />
        </>
  );
}

export default App;
