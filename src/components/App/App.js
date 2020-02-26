import React, {useEffect, useState} from 'react';
import './App.scss';
// import AddTraining from "../AddTraining/AddTraining";
import Header from "../Header/Header";
// import TrainingCalendar from "../TrainingCalendar/TrainingCalendar";
import TrainingSummary from "../TrainingSummary/TrainingSummary";
import Calendar from "../Calendar/Calendar";
import AddTraining from "../AddTraining/AddTraining";


function App() {
    const [trainings, setTrainings] = useState([]);
    const [trainingToShow, setTrainingToShow] = useState({});
    let tempArray = [];


    if (trainings.length > 1) {
        tempArray = [...trainings];
    }

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

    if (trainings.length === 0) {
        return (
            <h1>Loading</h1>
        )
    }

  return (
      <>
        <Header />
        <Calendar trainings={trainings} setTrainingToShow={setTrainingToShow} />
        <TrainingSummary trainingToShow={trainingToShow} />
        <br />
        <br />
        <br />
        <AddTraining />
      </>
  );
}

export default App;
