export default function handleStep(e, set) {
    if (e.currentTarget.innerText === '1') {
        set(0);
    }
    if (e.currentTarget.innerText === '2') {
        set(1);
    }
    if (e.currentTarget.innerText === '3') {
        set(2);
    }
    if (e.currentTarget.innerText === '4') {
        set(3);
    }
    if (e.currentTarget.innerText === '5') {
        set(4);
    }
    if (e.currentTarget.innerText === '6') {
        set(5);
    }
    if (e.currentTarget.innerText === '7') {
        set(6);
    }
    if (e.currentTarget.innerText === '8') {
        set(7);
    }
    if (e.currentTarget.innerText === '9') {
        set(8);
    }
    if (e.currentTarget.innerText === '10') {
        set(9);
    }
};