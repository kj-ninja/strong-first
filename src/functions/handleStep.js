export default function handleStep(e, set) {
    if (e.currentTarget.innerText === '1') {
        set('stepOne');
    }
    if (e.currentTarget.innerText === '2') {
        set('stepTwo');
    }
    if (e.currentTarget.innerText === '3') {
        set('stepThree');
    }
    if (e.currentTarget.innerText === '4') {
        set('stepFour');
    }
    if (e.currentTarget.innerText === '5') {
        set('stepFive');
    }
    if (e.currentTarget.innerText === '6') {
        set('stepSix');
    }
    if (e.currentTarget.innerText === '7') {
        set('stepSeven');
    }
    if (e.currentTarget.innerText === '8') {
        set('stepEight');
    }
    if (e.currentTarget.innerText === '9') {
        set('stepNine');
    }
    if (e.currentTarget.innerText === '10') {
        set('stepMaster');
    }
};