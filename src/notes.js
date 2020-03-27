function getNumberOfDaysInMonth(date) {
    let nextMonth = date.getMonth() + 1;
    // if you pass 0 as day, it shows a last day of last month so we know how many days was in last month
    return new Date(date.getFullYear(), nextMonth, 0).getDate();
}
function getDayOfTheWeekOfFirstDayInMonth(date) {
    // days number from 0-6 where 0 is sunday
    let firstDayInCurrentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDayInCurrentDate.getDay();
}

function changeDayOfWeekFromEnglishToPolishSystem(dayOfWeek) {
    // change day from english system to polish where sunday is 0 not 6
    if (dayOfWeek === 0) {
        dayOfWeek = 6;
    } else {
        dayOfWeek--;
    }
    return dayOfWeek;
}

function generateCalendar(date) {
    let actualMonthDays = getNumberOfDaysInMonth(date);
    let dayOfWeekOfFirstDayInMonth = getDayOfTheWeekOfFirstDayInMonth(date);

    console.log('actual days in month: ' + actualMonthDays);
    console.log('day of week of first day in month: ' + dayOfWeekOfFirstDayInMonth);
    dayOfWeekOfFirstDayInMonth = changeDayOfWeekFromEnglishToPolishSystem(dayOfWeekOfFirstDayInMonth);
    console.log('day of week after change to polish system: ' + dayOfWeekOfFirstDayInMonth);

    let calendar = '<table><tbody><tr>';
    let dayOfWeek = dayOfWeekOfFirstDayInMonth;

    // loop over all days
    for (let i = 1; i <= actualMonthDays; i++) {

        // if first day and its not a monday we add colspan to make space for days from last month
        if (i === 1 && dayOfWeekOfFirstDayInMonth !== 0) {
            calendar += '<td colspan="'+ dayOfWeekOfFirstDayInMonth+'" ></td>';
        }

        // here generate div with actual day , put anything you want in here
        calendar += '<td><div>'+i+'</div></td>';

        // if last day and its not a sunday generate space
        if (i === actualMonthDays && dayOfWeek !== 6) {
            calendar += '<td colspan="'+ (6 - dayOfWeek) +'"></td>';
        }

        // if sunday move to next row and change to monday
        if (dayOfWeek === 6) {
            dayOfWeek = 0;
            calendar += '</tr><tr>'
        } else {
            dayOfWeek++;
        }
    }
    calendar += '</tr></tbody></table>';

    return calendar;
}

// let date = new Date(2020,11,1);
// let calendar = generateCalendar(date);
// document.getElementById('calendar').innerHTML = calendar;