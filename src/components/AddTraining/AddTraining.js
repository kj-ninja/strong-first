import React, {useState, useEffect} from 'react';
import './AddTraining.scss';
import ReactSelect from "../ReactSelect/ReactSelect";



const AddTraining = () => {
    const [exercisesPreview, setExercisesPreview] = useState([]);

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [kcal, setKcal] = useState('');
    const [notes, setNotes] = useState('');

    const [selectedExercise, setSelectedExercise] = useState({});
    const [selectedRepetitions, setSelectedRepetitions] = useState(0);
    const [selectedExerciseTime, setSelectedExerciseTime] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(0);

    let today = new Date().toISOString().substr(0, 10);
    

    const handleAddSet = () => {
        // walidacja

        let index = null;
        exercisesPreview.forEach((exercisePreview, i) => {
            if (exercisePreview.id === selectedExercise.value) {
                index = i;
            }
        });

        if (index !== null) {
            const tempArray = [...exercisesPreview];
            tempArray[index].repetitions.push(selectedRepetitions);
            tempArray[index].weight.push(selectedWeight);
            tempArray[index].time.push(selectedExerciseTime);

            setExercisesPreview(tempArray);

        } else {
            setExercisesPreview(prevState => {
                return (
                    [...prevState, {
                        name: selectedExercise.label,
                        repetitions: [selectedRepetitions],
                        weight: [selectedWeight],
                        time: [selectedExerciseTime],
                        id: selectedExercise.value
                    }]
                )
            });
        }
    };

    const handleDeleteExercise = (id) => {
        const tempArray = exercisesPreview.filter(exercise => {
            return exercise.id !== id
        });

        setExercisesPreview(tempArray);
    };

    const handleAddTraining = () => {

    };

    return (
        <div className="container">
            <form>
                <div className="form-group form-inline">
                    <label htmlFor="date">Data:</label>
                    <input type="date" className="form-control form-control-sm" id="date"
                           onChange={(e) => setDate(e.target.value)} defaultValue={today}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="name">Nazwa:</label>
                    <input type="text" className="form-control form-control-sm" id="name"
                           placeholder="Podaj nazwę treningu"
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="time">Czas trwania:</label>
                    <input type="text" className="form-control form-control-sm" id="time"
                           placeholder="Podaj czas trwania treningu"
                           onChange={((e) => setDuration(e.target.value))}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="kcal">Kcal:</label>
                    <input type="text" className="form-control form-control-sm" id="kcal"
                           placeholder="Ilość spalonych kalorii"
                           onChange={(e) => {
                               setKcal(e.target.value)
                           }}/>
                </div>
                <div className="form-group notes">
                    <label htmlFor="exampleFormControlTextarea1">Notatki:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                              onChange={(e) => {
                                  setNotes(e.target.value)
                              }}/>
                </div>

                <div className="form-group form-inline">
                    <label>Ćwiczenie:</label>
                    <ReactSelect setExercise={setSelectedExercise}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="reps">Powtórzenia:</label>
                    <input type="text" className="form-control form-control-sm" id="reps"
                           placeholder="Podaj ilość powtórzeń"
                           onChange={(e) => {
                               setSelectedRepetitions(e.target.value)
                           }}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="time">Czas:</label>
                    <input type="text" className="form-control form-control-sm" id="time" placeholder=""
                           onChange={(e) => {
                               setSelectedExerciseTime(e.target.value)
                           }}/>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="weight">Ciężar:</label>
                    <input type="text" className="form-control form-control-sm" id="weight" placeholder=""
                           onChange={(e) => {
                               setSelectedWeight(e.target.value)
                           }}/>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={handleAddSet}>Dodaj serię</button>
                    <button type="button" className="btn btn-success pull-right" onClick={handleAddTraining}>Zapisz trening</button>
                </div>
            </form>

            <ul className="list-group">
                {exercisesPreview.map(element => {
                    return (
                        <li key={element.id} className="list-group-item">
                            {element.name.toUpperCase()}: {element.repetitions.map((rep, i) => (
                            <span key={i} className="exercise-rep">{rep}x</span>
                        ))}
                            <button onClick={() => handleDeleteExercise(element.id)} type="button" className="close"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default AddTraining;