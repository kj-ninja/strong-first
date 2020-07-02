import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSet, deleteSet} from '../../store/actions/addTrainingForm';
import {useForm} from "react-hook-form";
import ReactSelect from "../../components/ReactSelect/ReactSelect";

const AddTrainingStepTwo = (props) => {
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
        <>
            <div className="add-training__overlay"/>
            <div className="add-training__background"/>
            <div className="add-training__container">
                <form onSubmit={handleSubmit(handleStepTwo)} className="add-training__form">
                    <div className="add-training__form-group reactSelect">
                        <label>Ćwiczenie</label>
                        <ReactSelect setExercise={setSelectedExercise} name="selectedExercise"/>
                    </div>

                    <div className="add-training__form-group">
                        <label>Powtórzenia:</label>
                        <input
                            name="repetitions"
                            placeholder="Podaj ilość powtórzeń"
                            ref={register}
                            className="form-control form-control-sm"
                        />
                    </div>

                    <div className="add-training__form-group">
                        <label>Czas:</label>
                        <input
                            name="time"
                            ref={register}
                            className="form-control form-control-sm"
                        />
                    </div>

                    <div className="add-training__form-group">
                        <label>Ciężar:</label>
                        <input
                            name="weight"
                            ref={register}
                            className="form-control form-control-sm"
                        />
                    </div>

                    <button type="button" onClick={() => props.history.goBack()}>Wstecz</button>
                    <button type="button" onClick={handleAddSet}>Dodaj serię</button>
                    <button type="submit">Dalej</button>

                    {props.addTrainingForm.sets.map((set, i) => (
                        <>
                            <p key={i} onClick={() => props.deleteSet(i)}>
                                {set.exercise.name}
                                <p>{set.repetitions ? 'powtórzenia: ' + set.repetitions : null}</p>
                                <p>{set.time ? 'czas: ' + set.time : null}</p>
                                <p>{set.weight ? 'obciążenie: ' + set.weight : null}</p>
                            </p>
                        </>
                    ))}
                </form>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        addTrainingForm: state.addTrainingForm.training
    }
};

export default connect(mapStateToProps, {addSet, deleteSet})(AddTrainingStepTwo);