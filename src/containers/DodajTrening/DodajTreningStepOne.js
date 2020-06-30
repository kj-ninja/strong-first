import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {addTrainingStepOne} from '../../store/actions/addTraining';

const DodajTreningStepOne = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const handleStepOne = (data) => {
        props.addTrainingStepOne(data);
        props.history.push('/add-training/step2');
    };

    return (
        <form onSubmit={handleSubmit(handleStepOne)}>
            <div className="input-container">
                <input
                    name="date"
                    type="date"
                    ref={register}
                    defaultValue={props.addTrainingForm.date}
                />
            </div>

            <div className="input-container">
                <input
                    name="name"
                    placeholder="Podaj nazwę treningu"
                    ref={register({required: true})}
                    defaultValue={props.addTrainingForm.name}
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
            </div>

            <div className="input-container">
                <input name="duration"
                       placeholder="Podaj czas trwania treningu (w min.)"
                       ref={register({required: true})}
                       defaultValue={props.addTrainingForm.duration}
                />
                {errors.duration ? <p>{errors.duration.message}</p> : null}
            </div>

            <div className="input-container">
                <input name="kcal"
                       placeholder="Ilość spalonych kalorii"
                       ref={register}
                       defaultValue={props.addTrainingForm.kcal}
                />
            </div>

            <div className="input-container">
                <input name="note"
                       placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                       ref={register}
                       defaultValue={props.addTrainingForm.note}
                />
            </div>

            <button type="submit">Dalej</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        addTrainingForm: state.addTrainingForm.training
    }
};

export default connect(mapStateToProps, {addTrainingStepOne})(DodajTreningStepOne);