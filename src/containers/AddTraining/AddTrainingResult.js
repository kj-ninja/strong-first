import React from 'react';
import {connect} from 'react-redux';
import './AddTraining.scss';
import {addTrainingToApi, editTrainingInApi} from "../../store/actions/trainings";
import Button from "../../components/UI/Button/Button";
import {getRepsView} from "../../functions/getRepsView";

const AddTrainingResult = (props) => {
    const {addTrainingForm, addTrainingToApi, editTrainingInApi} = props;

    const handleAddTraining = () => {
        let counter = 0;
        props.trainings.forEach(training => {
            if (training.date === addTrainingForm.date) {
                counter++;
            }
        })

        if (counter >= 2) {
            alert('Osiągnięto limit treningów w ciągu jednego dnia! Czas na relaks.' +
                'Zawsze możesz edytować jeden z treningów w sekcji dzienniczka.');
            setTimeout(() => {
                props.history.push('/diary')
            }, 500);
        } else {
            addTrainingToApi(props.token, addTrainingForm);
            setTimeout(() => {
                props.history.push('/diary')
            }, 1500);
        }
    };

    const handleEditTraining = () => {
        editTrainingInApi(props.token, addTrainingForm, addTrainingForm.id);
        setTimeout(() => {
            props.history.push('/diary')
        }, 1500);
    };

    let tempArray = [];
    props.addTrainingForm.sets.forEach(set => {
        tempArray.push({name: set.exercise.name, id: set.exercise.id, repetitions: [], weight: [], time: []})
    });

    const removeDuplicates = arr => {
        // Create an array of objects
        let jsonObject = arr.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);

        return [...uniqueSet].map(JSON.parse);
    };
    const exerciseView = removeDuplicates(tempArray);

    props.addTrainingForm.sets.forEach((set) => {
        exerciseView.forEach((element) => {
            if (set.exercise.id === element.id) {
                element.repetitions.push(set.repetitions);
                element.weight.push(set.weight);
                element.time.push(set.time)
            }
        })
    });


    return (
        <>
            <div className="add-training__overlay"/>
            <div className="add-training__background"/>
            <div className="add-training__result-container">
                <h2 className="add-training__result-title"><span>Nazwa treningu:</span> {addTrainingForm.name}</h2>
                <p><span>Data treningu:</span> {addTrainingForm.date}</p>
                <p><span>Czas trwania treningu:</span> {addTrainingForm.duration}</p>
                <p><span>Ilość spalonych kalorii:</span> {addTrainingForm.kcal}</p>
                <p><span>Notatki:</span> {addTrainingForm.note}</p>

                <h3>Cwiczenia:</h3>
                <ul className="add-training__result-list">
                    {exerciseView.map(element => {
                        return (
                            <li key={element.id} className="add-training__result-list--element">
                                <span
                                    className="add-training__result-list--element-name">{element.name}:</span>
                                {getRepsView(element).map((rep, i) => {
                                    return (
                                        <span key={i} className="add-training__result-list--element-rep">
                                    {rep}
                                </span>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ul>

                <div className="add-training__buttons">
                    <Button type="button" color="blue" clicked={() => props.history.goBack()}>Wstecz</Button>
                    {props.isEdit ?
                        <Button type="button" color="red" clicked={handleEditTraining}>Zapisz zmiany</Button> :
                        <Button type="button" color="red" clicked={handleAddTraining}>Zapisz trening</Button>}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        addTrainingForm: state.addTrainingForm.training,
        token: state.auth.token,
        trainings: state.trainings.trainings,
        isEdit: state.addTrainingForm.isEdit
    }
};

export default connect(mapStateToProps, {addTrainingToApi, editTrainingInApi})(AddTrainingResult);