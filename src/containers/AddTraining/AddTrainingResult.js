import React from 'react';
import {connect} from 'react-redux';
import {addTrainingToApi} from "../../store/actions/addTraining";

const AddTrainingResult = (props) => {
    const {addTraining, addTrainingToApi} = props;

    const handleAddTraining = () => {
        let counter = 0;

        props.trainings.forEach(training => {
            if (training.date === addTraining.date) {
                counter++;
            }
        })

        if (counter >= 2) {
          alert('Osiągnięto limit treningów w ciągu jednego dnia! Czas na relaks.' +
              'Zawsze możesz edytować jeden z treningów w sekcji dzienniczka.');
            setTimeout(()=> {props.history.push('/diary')}, 500);
        } else {
            addTrainingToApi(props.token, addTraining);
            setTimeout(()=> {props.history.push('/diary')}, 1500);
        }
    };

    return (
        <div style={{margin: '50px auto', maxWidth: '800px', border: '1px solid #eee', boxShadow: '2px 2px 0 0 #ddd'}}>
            <h1>Nazwa treningu: {addTraining.name}</h1>
            <p>Data treningu: {addTraining.date}</p>
            <p>Czas trwania treningu: {addTraining.duration}</p>
            <p>Ilość spalonych kalorri: {addTraining.kcal}</p>
            <p>Notatki: {addTraining.note}</p>

            <h2>Cwiczenia:</h2>
            {props.addTraining.sets.map((set, i)=>(
                <>
                    <p key={i}>{set.exercise.name} {set.repetitions}</p>
                </>
            ))}

            <button type="button" onClick={()=>props.history.goBack()}>Wstecz</button>
            <button type="button" onClick={handleAddTraining}>Zapisz trening</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        addTraining: state.addTraining.training,
        token: state.auth.token,
        trainings: state.trainings.trainings
    }
};

export default connect(mapStateToProps, {addTrainingToApi})(AddTrainingResult);