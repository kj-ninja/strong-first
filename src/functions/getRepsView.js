const getRepsView = element => {
    let repView = [];

    for (let i = 0; i < element.repetitions.length; i++) {
        if (element.time[i] !== 0 && element.time[i] !== '') {
            repView.push(element.time[i] + 'sec');
        } else if (element.weight[i] !== 0 && element.weight[i] !== '') {
            repView.push(element.repetitions[i] + 'x' + element.weight[i] + 'kg ');
        } else {
            repView.push(element.repetitions[i]);
        }
    }

    return repView;
};

export {getRepsView}