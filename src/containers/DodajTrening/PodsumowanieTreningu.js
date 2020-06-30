import React from 'react';
import {useForm} from "react-hook-form";

const PodsumowanieTreningu = ({training, setTraining, addTraining, backToStepOne}) => {
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            date: training.date,
            name: training.name,
            duration: training.duration,
            kcal: training.kcal,
            note: training.note
        }
    });

    const handleAddTraining = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddTraining)}>
                <div className="input-container">
                    <input
                        name="date"
                        type="date"
                        ref={register}
                    />
                </div>

                <div className="input-container">
                    <label>Nazwa treningu</label>
                    <input
                        name="name"
                        placeholder="Podaj nazwę treningu"
                        ref={register({required: true})}
                    />
                </div>

                <div className="input-container">
                    <label>Czas trwania treningu</label>
                    <input name="duration"
                           placeholder="Podaj czas trwania treningu (w min.)"
                           ref={register({required: true})}
                    />
                </div>

                <div className="input-container">
                    <label>Spalone kalorię</label>
                    <input name="kcal"
                           placeholder="Ilość spalonych kalorii"
                           ref={register}
                    />
                </div>

                <div className="input-container">
                    <label>Notatki</label>
                    <input name="note"
                           placeholder="Podsumowanie treningu, krótki opis a może jakieś wnioski?"
                           ref={register}
                    />
                </div>


                {training.sets.map((set, i) => (
                    <div className="input-container">
                        <label>{set.exercise.name}</label>
                        <input name="sets.reps"
                               ref={register}
                               value={set.repetitions}
                               onChange={(e)=>setTraining((prevState)=>{
                                   console.log(prevState);
                               })}
                        />
                        <input name="sets.duration"
                               ref={register}
                               value={set.weight}
                        />
                        <input name="sets.weight"
                               ref={register}
                               value={set.time}
                        />
                        <input name="sets.exercise.id"
                               ref={register}
                               value={set.exercise.id}
                        />
                        <input name="sets.exercise.name"
                               ref={register}
                               value={set.exercise.name}
                        />
                    </div>
                ))}


                <button type="button" onClick={backToStepOne}>Anuluj</button>
                <button type="submit">Zapisz trening</button>
            </form>
        </div>
    );
};

export default PodsumowanieTreningu;