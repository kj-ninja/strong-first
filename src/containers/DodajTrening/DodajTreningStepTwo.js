import React from 'react';
import {useForm} from "react-hook-form";

const DodajTreningStepTwo = () => {
    const {register, handleSubmit, errors, formState} = useForm({
    });
    const {isValid} = formState;

    const handleOrder = () => console.log('poszlo');

    return (
        <form onSubmit={handleSubmit(handleOrder)}>
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
                       placeholder="Podaj czas trwania treningu (w minutach)"
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
                <input name="duration"
                       placeholder="Podaj czas trwania treningu"
                       ref={register}
                />
            </div>

            <div className="input-container">
                <input name="notes"
                       placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                       ref={register}
                />
            </div>

            <button type="submit">Dalej</button>
        </form>
    );
};

export default DodajTreningStepTwo;