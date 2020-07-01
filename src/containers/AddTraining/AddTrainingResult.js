import React from 'react';
import {connect} from 'react-redux';
import {addTrainingToApi} from "../../store/actions/addTraining";

const AddTrainingResult = (props) => {
    const {addTraining, addTrainingToApi} = props;

    const handleAddTraining = () => {
        //@TODO
        // sprawdz czy w danym dniu sa juz 2 treningi jak tak to wypad z baru
        addTrainingToApi(props.token, addTraining);
        setTimeout(()=> {props.history.push('/diary')}, 1500);
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