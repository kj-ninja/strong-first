import React from 'react';
import {connect} from 'react-redux';

const PodsumowanieTreningu = (props) => {
    const {addTrainingForm} = props;
    const handleAddTraining = () => {
        alert(JSON.stringify(addTrainingForm));
    }

    return (
        <div style={{margin: '50px auto', maxWidth: '800px'}}>
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
        addTrainingForm: state.addTrainingForm.training
    }
};

export default connect(mapStateToProps)(PodsumowanieTreningu);