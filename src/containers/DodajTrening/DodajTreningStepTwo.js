import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ReactSelect from "../../components/ReactSelect/ReactSelect";

const DodajTreningStepTwo = (props) => {
    const [sets, setSets] = useState([]);
    const {register, handleSubmit, getValues} = useForm();
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

    const handleStepTwo = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(handleStepTwo)}>
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

            <button type="button" onClick={()=>props.history.goBack()}>Wstecz</button>
            <button type="button" onClick={handleAddSet}>Dodaj serię</button>
            <button type="submit">Dalej</button>

            {sets.map((set, i)=>(
                <>
                    <p key={i}>{set.exercise.name}</p>
                </>
            ))}
        </form>
    );
};

export default DodajTreningStepTwo;