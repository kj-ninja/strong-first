import React from 'react';
import {connect} from 'react-redux';
import {addTrainingToApi} from "../../store/actions/trainings";

const PodsumowanieTreningu = (props) => {
    const {addTrainingForm, addTrainingToApi} = props;

    const handleAddTraining = () => {
        addTrainingToApi(props.token, addTrainingForm);
        setTimeout(()=> {props.history.push('/diary')}, 1500);
    };

    return (
        <div style={{margin: '50px auto', maxWidth: '800px', border: '1px solid #eee', boxShadow: '2px 2px 0 0 #ddd'}}>
            <h1>Nazwa treningu: {addTrainingForm.name}</h1>
            <p>Data treningu: {addTrainingForm.date}</p>
            <p>Czas trwania treningu: {addTrainingForm.duration}</p>
            <p>Ilość spalonych kalorri: {addTrainingForm.kcal}</p>
            <p>Notatki: {addTrainingForm.note}</p>

            <h2>Cwiczenia:</h2>
            {props.addTrainingForm.sets.map((set, i)=>(
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
        addTrainingForm: state.addTrainingForm.training,
        token: state.auth.token
    }
};

export default connect(mapStateToProps, {addTrainingToApi})(PodsumowanieTreningu);