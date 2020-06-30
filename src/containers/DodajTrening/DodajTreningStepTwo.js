import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSet, deleteSet} from '../../store/actions/addTraining';
import {useForm} from "react-hook-form";
import ReactSelect from "../../components/ReactSelect/ReactSelect";

const DodajTreningStepTwo = (props) => {
    const {register, handleSubmit, getValues} = useForm();
    const [selectedExercise, setSelectedExercise] = useState({});

    const handleAddSet = () => {
        const set = {...getValues(), exercise: {id: selectedExercise.value, name: selectedExercise.label}};
        props.addSet(set);
    };

    const handleStepTwo = () => {
        props.history.push('/add-training/result');
    }

    return (
        <form onSubmit={handleSubmit(handleStepTwo)}>
            <div className="add-training__form-group reactSelect">
                <label>Ćwiczenie</label>
                <ReactSelect setExercise={setSelectedExercise} name="selectedExercise"/>
            </div>

            <div className="input-container">
                <label>Powtórzenia:</label>
                <input
                    name="repetitions"
                    placeholder="Podaj ilość powtórzeń"
                    ref={register}
                />
            </div>

            <div className="input-container">
                <label>Czas:</label>
                <input
                    name="time"
                    ref={register}
                />
            </div>

            <div className="input-container">
                <label>Ciężar:</label>
                <input
                    name="weight"
                    ref={register}
                />
            </div>

            <button type="button" onClick={()=>props.history.goBack()}>Wstecz</button>
            <button type="button" onClick={handleAddSet}>Dodaj serię</button>
            <button type="submit">Dalej</button>

            {props.addTrainingForm.sets.map((set, i)=>(
                <>
                    <p key={i} onClick={()=>props.deleteSet(i)}>
                        {set.exercise.name}
                        <p>{set.repetitions ? 'powtórzenia: ' + set.repetitions : null}</p>
                        <p>{set.time ? 'czas: ' + set.time : null}</p>
                        <p>{set.weight ? 'obciążenie: ' + set.weight : null}</p>
                    </p>
                </>
            ))}
        </form>
    );
};

const mapStateToProps = state => {
    return {
        addTrainingForm: state.addTrainingForm.training
    }
};

export default connect(mapStateToProps, {addSet, deleteSet})(DodajTreningStepTwo);