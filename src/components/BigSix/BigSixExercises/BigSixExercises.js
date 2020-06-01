import React from 'react';
import PushUps from "./PushUps/PushUps";
import Transition from "react-transition-group/cjs/Transition";

const defaultStyleExercise= {
    opacity: '0',
}
const transitionStylesExercise = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting:  { opacity: 1 },
    exited:  { opacity: 0}
};

const BigSixExercises = ({bigSix, isExercise, exercise}) => {
    return (
        <Transition in={isExercise} timeout={50} appear={true} unmountOnExit={true}>
            {state => (
                <section className="exercise__cover" style={{
                    ...defaultStyleExercise,
                    ...transitionStylesExercise[state]
                }}>
                    {exercise === 'push-ups' && <PushUps bigSix={bigSix}/>}
                </section>
            )}
        </Transition>
    );
};

export default BigSixExercises;