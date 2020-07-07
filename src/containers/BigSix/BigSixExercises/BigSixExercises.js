import React from 'react';
import Transition from "react-transition-group/cjs/Transition";
import Exercise from "./Exercise/Exercise";
import BigSixIcons from "../BigSixIcons/BigSixIcons";

const defaultStyleExercise = {
    opacity: '0',
}
const transitionStylesExercise = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0}
};

const BigSixExercises = (props) => {
    console.log(props);
    return (
        <Transition in={true} timeout={50} appear={true} unmountOnExit={true}>
            {state => (
                <section className="exercise__cover" style={{
                    ...defaultStyleExercise,
                    ...transitionStylesExercise[state]
                }}>
                    <BigSixIcons/>
                    <Exercise exercise={props.exercise}/>
                </section>
            )}
        </Transition>
    );
};

export default BigSixExercises;