/**
 * na podstawie daty zwraca dzien tygodnia pierwszego dnia w miesiacu
 * na przyklad jesli 1 kwiecien to sroda to zwroci 2
 * 0 - poniedzialek
 * 1 - wtorek
 * 2 - sroda
 * 3 - czwartek
 * 4 - piatek
 * 5 - sobota
 * 6 - niedziela
 */
function getDayOfTheWeekOfFirstDayInMonth(date) {
    // days number from 0-6 where 0 is sunday
    let firstDayInCurrentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    // change on polish system
    return changeDayOfWeekFromEnglishToPolishSystem(firstDayInCurrentDate.getDay());
}

/**
 * Funkcja pomocnicza zamienia dni tygodnia
 * z systemu angielskiego na polski, w angli tydzien zaczyna sie od niedzieli
 * a w polse od poniedzialku, niesamowite nie!? moze jeszcze jezdza po lewej stronie ulicy?
 */
function changeDayOfWeekFromEnglishToPolishSystem(dayOfWeek) {
    // change day from english system to polish where sunday is 0 not 6
    if (dayOfWeek === 0) {
        dayOfWeek = 6;
    } else {
        dayOfWeek--;
    }
    return dayOfWeek;
}

/**
 * przyjmuje tablice treningow z requesta do api, ewentualnie bierze te treningi ze stata
 * i wrapuje je kluczem tak by byl obiekt typu
 * {
 *  "2020-03-01" : {
 *         "id": 2,
 *         "name": "tyram cos",
 *         "date": "2019-10-08 00:00:00",
 *         "duration": 3540,
 *   }
 * }
 * dzieki temu latwiej bedzie szukac w nim elementow po dacie
 */
function wrapTrainingsWithDate(trainings) {
    let trainingsWrapped = {};
    trainings.forEach(ele => {
        let day = new Date(ele.date);
        trainingsWrapped[formatDate(day)] = ele;
    });

    return trainingsWrapped;
}

/**
 * dostajemy aktualna date = new Date(2020,3,22) /  np kwiecien
 * latwo z niej wziac pierwszy dzien miesiaca
 * pobieramy aktualny dzien tygodnia naszej 1 dnia miesiaca (czyli np 2 dla srody)
 * w latwy sposob dostajemy sie do poniedzialku robicac cos takiego: new Date(date.getFullYear(), nextMonth, -(firstDay)).getDate();
 */
function getFirstMondayInCalendar(date) {
    let dayOfWeekOfFirstDayInMonth = getDayOfTheWeekOfFirstDayInMonth(date);

    // nie wiem czemu tak powinno byc po prostu -dayOfWeekOfFirstDayInMonth ale wtedy nie dzialalo ;P
    let minusDays = (-dayOfWeekOfFirstDayInMonth + 1);
    return new Date(date.getFullYear(), date.getMonth(), minusDays);
}

/**
 * fomatuje date na upragniony format
 */
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

/**
 * tworzy obiekt dnia, albo z treningiem albo bez
 */
function createDay(date, wrappedTrainings) {
    return {
        dayNumber: date.getDate(),
        monthNumber: date.getMonth(),
        element: (function () {

            let dayFormatted = formatDate(date);
            // if wrappedTrainings has training in this date
            if (wrappedTrainings.hasOwnProperty(dayFormatted)) {
                return {
                    type: "training",
                    icon: "fa fa-check",
                    id: wrappedTrainings[dayFormatted].id
                };
            } else {
                return null;
            }
        }())
    }
}

function createDaysInMonth(date, wrappedTrainings) {
    const firstDay = getFirstMondayInCalendar(date);
    // month
    const month = [];
    let actualDay = firstDay;

    // our calendar shows always 6 weeks
    for (let i = 0; i < 6; i++) {
        let week = [];

        // loop over 7 days in week
        for (let j = 0; j < 7; j++) {
            week.push(
                createDay(actualDay, wrappedTrainings)
            );

            // switch to next day
            actualDay.setDate(actualDay.getDate() + 1);
        }
        month.push(week);
    }
    return month;
}

export {
    getDayOfTheWeekOfFirstDayInMonth,
    changeDayOfWeekFromEnglishToPolishSystem,
    createDay,
    createDaysInMonth,
    formatDate,
    getFirstMondayInCalendar,
    wrapTrainingsWithDate
};
