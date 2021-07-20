const removeDuplicates = arr => {
    // Create an array of objects
    let jsonObject = arr.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);

    return [...uniqueSet].map(JSON.parse);
};

export const trainingSummaryView = (training) => {
    let tempArray = [];
    training.sets.forEach(set => {
        tempArray.push({name: set.exercise.name, id: set.exercise.id, repetitions: [], weight: [], time: []})
    });

    const exerciseView = removeDuplicates(tempArray);

    training.sets.forEach((set) => {
        exerciseView.forEach((element) => {
            if (set.exercise.id === element.id) {
                element.repetitions.push(set.repetitions);
                element.weight.push(set.weight);
                element.time.push(set.time)
            }
        })
    });

    return exerciseView;
};
