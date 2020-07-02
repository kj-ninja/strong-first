import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {addTrainingStepOne} from '../../store/actions/addTrainingForm';

const AddTrainingStepOne = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const handleStepOne = (data) => {
        props.addTrainingStepOne(data);
        props.history.push('/add-training/step2');
    };

    return (
        <>
            <div className="add-training__overlay"/>
            <div className="add-training__background"/>
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
                            ref={register({required: true})}
                            defaultValue={props.addTrainingForm.name}
                            className="form-control form-control-sm"
                            id="name"
                        />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                    </div>

                    <div className="add-training__form-group">
                        <label htmlFor="trainingTime">Czas trwania:</label>
                        <input name="duration"
                               placeholder="Podaj czas trwania treningu (w min.)"
                               ref={register({required: true})}
                               defaultValue={props.addTrainingForm.duration}
                               className="form-control form-control-sm"
                               id="trainingTime"
                        />
                        {errors.duration ? <p>{errors.duration.message}</p> : null}
                    </div>

                    <div className="add-training__form-group">
                        <label htmlFor="kcal">Kcal:</label>
                        <input name="kcal"
                               placeholder="Ilość spalonych kalorii"
                               ref={register}
                               defaultValue={props.addTrainingForm.kcal}
                               className="form-control form-control-sm"
                               id="kcal"
                        />
                    </div>

                    <div className="add-training__form-group note">
                        <label htmlFor="note">Notatki:</label>
                        <input name="note"
                               placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                               ref={register}
                               defaultValue={props.addTrainingForm.note}
                               className="form-control form-control-sm"
                               id="note"
                        />
                    </div>

                    <button type="submit">Dalej</button>
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