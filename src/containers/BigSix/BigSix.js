import React, {useEffect, useState} from 'react';
import './BigSix.scss';
import {getBigSix} from "../../api/ironman";
import BigSixTable from "./BigSixTable";
import BigSixIcons from "./BigSixIcons/BigSixIcons";
import BigSixHeader from "./BigSixHeader/BigSixHeader";
import BigSixExercises from "./BigSixExercises/BigSixExercises";

const BigSix = () => {
    const [bigSix, setBigSix] = useState([]);
    const [exercise, setExercise] = useState('table');
    const [isTable, setIsTable] = useState(true);
    const [isExercise, setIsExercise] = useState(false);
    console.log('Big Six');

    useEffect(()=>{
        console.log('fetch do ironman');
        getBigSix(setBigSix);
    }, []);

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
            {bigSix.length === 0 ? null : <BigSixExercises bigSix={bigSix} isExercise={isExercise} exercise={exercise}/>}
        </>
    )
};

export default BigSix;