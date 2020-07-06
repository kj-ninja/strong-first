export const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    if (num < 60) {
        return minutes + 'min';
    }
    if (minutes === 0) {
        return hours + 'h'
    }

    return hours + 'h ' + minutes + 'min';
}