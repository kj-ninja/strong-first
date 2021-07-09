import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {addTrainingStepOne} from '../../../store/actions/add-training.actions';
import Button from "../../../components/ui/button/Button";

const AddTrainingStepOne = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const handleStepOne = (data) => {
        props.addTrainingStepOne(data);
        props.history.push('/add-training/step2');
    };

    const height = {height: '100vh'};

    return (
        <>
            <div className="add-training__overlay" style={height}/>
            <div className="add-training__background" style={height}/>
            <div className="add-training__container">
                <form onSubmit={handleSubmit(handleStepOne)} className="add-training__form">
                    <div className="add-training__form-group">
                        <label htmlFor="date">Data:</label>
                        <input
                            name="date"
                            type="date"
                            ref={register}
                            defaultValue={props.addTrainingForm.date}
                            className="form-control form-control-sm"
                            id="date"
                        />
                    </div>

                    <div className="add-training__form-group">
                        <label htmlFor="name">Nazwa:</label>
                        <input
                            name="name"
                            placeholder="Podaj nazwę treningu"
                            ref={register({required: "Pole wymagane"})}
                            defaultValue={props.addTrainingForm.name}
                            className="form-control form-control-sm"
                            id="name"
                        />
                        {errors.name ? <p className="add-training__error-message">{errors.name.message}</p> : null}
                    </div>

                    <div className="add-training__form-group">
                        <label htmlFor="trainingTime">Czas trwania:</label>
                        <input name="duration"
                               placeholder="Podaj czas trwania treningu (w min.)"
                               ref={register({required: "Pole wymagane", pattern: /^[1-9]+[0-9]*$/})}
                               defaultValue={props.addTrainingForm.duration}
                               className="form-control form-control-sm"
                               id="trainingTime"
                        />
                        {errors.duration ?
                            <p className="add-training__error-message">{errors.duration.message}</p> : null}
                        {errors.duration?.type === "pattern" &&
                        <p className="add-training__error-message">Podany czas musi być liczbą</p>}
                    </div>

                    <div className="add-training__form-group">
                        <label htmlFor="kcal">Kcal:</label>
                        <input name="kcal"
                               placeholder="Ilość spalonych kalorii"
                               ref={register({pattern: /^[1-9]+[0-9]*$/})}
                               defaultValue={props.addTrainingForm.kcal}
                               className="form-control form-control-sm"
                               id="kcal"
                        />
                        {errors.kcal?.type === "pattern" &&
                        <p className="add-training__error-message">Podana wartość musi być liczbą większą niż 0</p>}
                    </div>

                    <div className="add-training__form-group note">
                        <label htmlFor="note">Notatki:</label>
                        <textarea name="note"
                               placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                               ref={register}
                               defaultValue={props.addTrainingForm.note}
                               className="form-control form-control-sm"
                               id="note"
                               rows={3}
                        />
                    </div>
                    <div className="add-training__buttons">
                        <Button type="button" clicked={() => props.history.goBack()} color="blue">Wstecz</Button>
                        <Button type="submit" color="red">Dalej</Button>
                    </div>
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

export default connect(mapStateToProps, {addTrainingStepOne})(AddTrainingStepOne);
