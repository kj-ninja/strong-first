import React, {useState} from 'react';
import './BigSix.scss';
import BigSixTable from "./BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import BigSixHeader from "./BigSixHeader/BigSixHeader";
import BigSixExercises from "./BigSixExercises/BigSixExercises";

const BigSix = () => {
    const [bigSix, setBigSix] = useState([{
        "techniques": [
            {
                "exercise": {
                    "id": 1,
                    "name": "pompki"
                },
                "steps": [
                    {
                        "id": 1,
                        "name": "Pompki przy ścianie",
                        "stepNumber": 1,
                        "stepName": "Krok 1",
                        "images": [
                            "http://costam-zobaczymy.com/starting_position_1.jpeg",
                            "http://costam-zobaczymy.com/end_position_1.jpeg"
                        ],
                        "stages": {
                            "expert": "3 serie po 50 powtórzeń",
                            "beginner": "3 serie po 10 powtórzeń",
                            "intermediate": "3 serie po 25 powtórzeń"
                        }
                    },
                    {
                        "id": 1,
                        "name": "Pompki pochylone",
                        "stepNumber": 2,
                        "stepName": "Krok 2",
                        "images": [
                            "http://costam-zobaczymy.com/starting_position_1.jpeg",
                            "http://costam-zobaczymy.com/end_position_1.jpeg"
                        ],
                        "stages": {
                            "expert": "3 serie po 40 powtórzeń",
                            "beginner": "3 serie po 10 powtórzeń",
                            "intermediate": "3 serie po 25 powtórzeń"
                        }
                    }
                ]
            }
        ]
    }]);
    const [exercise, setExercise] = useState('table');
    const [isTable, setIsTable] = useState(true);
    const [isExercise, setIsExercise] = useState(false);
    console.log(bigSix[0].techniques[0].steps);

    const handleClickExercise = (e) => {
        setIsTable(false);
        setExercise(e.target.id);
        setIsExercise(true);
    };

    const handleClickBigSix = () => {
        setIsTable(true);
        setExercise('table');
        setIsExercise(false);
    };

    return (
        <>
            <BigSixHeader handleBigSix={handleClickBigSix}/>
            <BigSixIcons handleClickExercise={handleClickExercise}/>
            <BigSixTable exercise={exercise} isTable={isTable}/>
            <BigSixExercises bigSix={bigSix} isExercise={isExercise} exercise={exercise}/>
        </>
    )
};

export default BigSix;