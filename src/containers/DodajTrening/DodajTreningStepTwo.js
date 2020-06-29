import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ReactSelect from "../../components/ReactSelect/ReactSelect";

const DodajTreningStepTwo = ({prevStep, addTraining}) => {
    const [sets, setSets] = useState([]);
    const {register, handleSubmit, errors, formState, getValues} = useForm();
    const [selectedExercise, setSelectedExercise] = useState({});

    const handleAddSet = () => {
        const set = {...getValues(), exercise: {id: selectedExercise.value, name: selectedExercise.label}};

        setSets((prevState)=> {
            return [...prevState, {
                repetitions: +set.reps,
                time: +set.duration,
                weight: +set.weight,
                exercise: {
                    id: set.exercise.id,
                    name: set.exercise.name
                }
            }]
        });
    };

    const handleAddTraining = () => {
        addTraining(sets);
    };

    return (
        <form onSubmit={handleSubmit(handleAddTraining)}>
            <div className="add-training__form-group reactSelect">
                <label>Ćwiczenie</label>
                <ReactSelect setExercise={setSelectedExercise} name="selectedExercise"/>
            </div>

            <div className="input-container">
                <label>Powtórzenia:</label>
                <input
                    name="reps"
                    placeholder="Podaj ilość powtórzeń"
                    ref={register}
                />
            </div>

            <div className="input-container">
                <label>Czas:</label>
                <input
                    name="duration"
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

            <button type="button" onClick={prevStep}>Wstecz</button>
            <button type="button" onClick={handleAddSet}>Dodaj serię</button>
            <button type="submit">Zapisz trening</button>

            {sets.map(set=>(
                <>
                    <p>{set.exercise.name}</p>
                    <p>{set.reps}</p>
                </>
            ))}
        </form>
    );
};

export default DodajTreningStepTwo;