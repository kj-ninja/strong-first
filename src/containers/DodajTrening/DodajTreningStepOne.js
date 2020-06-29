import React from 'react';
import {useForm} from "react-hook-form";

const DodajTreningStepOne = ({handleStepOneTraining}) => {
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            date: new Date().toISOString().substr(0, 10)
        }
    });

    return (
        <form onSubmit={handleSubmit(handleStepOneTraining)}>
            <div className="input-container">
                <input
                    name="date"
                    type="date"
                    ref={register}
                />
            </div>

            <div className="input-container">
                <input
                    name="name"
                    placeholder="Podaj nazwę treningu"
                    ref={register({required: true})}
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
            </div>

            <div className="input-container">
                <input name="duration"
                       placeholder="Podaj czas trwania treningu (w min.)"
                       ref={register({required: true})}
                />
                {errors.duration ? <p>{errors.duration.message}</p> : null}
            </div>

            <div className="input-container">
                <input name="kcal"
                       placeholder="Ilość spalonych kalorii"
                       ref={register}
                />
            </div>

            <div className="input-container">
                <input name="note"
                       placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                       ref={register}
                />
            </div>

            <button type="submit">Dalej</button>
        </form>
    );
};

export default DodajTreningStepOne;