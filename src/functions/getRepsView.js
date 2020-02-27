const getRepsView = element => {
    let repView = [];

    for (let i = 0; i < element.repetitions.length; i++) {

        if (element.time[i] !== 0 && element.time[i] !== '0') {
            repView.push(element.time[i] + 'sec');
        } else if (element.weight[i] !== 0) {
            repView.push(element.repetitions[i] + 'x' + element.weight[i] + 'kg ');
        } else {
            repView.push(element.repetitions[i] + 'x ');
        }
    }
    return repView;
};

export {getRepsView}