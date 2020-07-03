import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSet, deleteSet} from '../../store/actions/addTrainingForm';
import {useForm} from "react-hook-form";
import ReactSelect from "../../components/ReactSelect/ReactSelect";
import Button from "../../components/UI/Button/Button";

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

    const handleExercisesView = () => (
        props.addTrainingForm.sets.map((set, i) => (
                <div key={i} onClick={() => props.deleteSet(i)} className="add-training__exerciseView">
                    <p>{i + 1 + '. '}{set.exercise.name + ':'}</p>
                    <p className="add-training__exerciseView--reps">{set.repetitions ? 'powtórzenia: ' + set.repetitions : null}</p>
                    <p className="add-training__exerciseView--time">{set.time ? 'czas: ' + set.time : null}</p>
                    <p className="add-training__exerciseView--weight">{set.weight ? 'obciążenie: ' + set.weight + ' kg' : null}</p>
                    <p>X</p>
                </div>
            ))
    );

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

                    <button className="add-training--button" type="button" onClick={handleAddSet}>
                        Dodaj serię
                    </button>
                    <div className="add-training__buttons">
                        <Button type="button" color="blue" clicked={() => props.history.goBack()}>Wstecz</Button>
                        <Button type="submit" color="red">Dalej</Button>
                    </div>
                </form>
            </div>
            <div className="add-training__exercises-view-container">
                {handleExercisesView()}
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