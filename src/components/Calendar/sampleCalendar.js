const trainingsFromApi = [
    {
        "id": 2,
        "name": "tyram cos",
        "date": "2020-03-08 00:00:00",
        "duration": 3540,
        "kcal": 450,
        "note": "niezle poszlo ale hantelki mogly by byc ciezsze w 4 serii.",
        "sets": [
            {
                "id": 13,
                "time": null,
                "weight": null,
                "repetitions": 10,
                "exercise": {
                    "id": 1,
                    "name": "pompki",
                    "musclePart": {
                        "id": 1,
                        "name": "klata",
                        "iconPath": "/img/klata.svg"
                    }
                }
            },
            {
                "id": 14,
                "time": null,
                "weight": null,
                "repetitions": 11,
                "exercise": {
                    "id": 1,
                    "name": "pompki",
                    "musclePart": {
                        "id": 1,
                        "name": "klata",
                        "iconPath": "/img/klata.svg"
                    }
                }
            },
            {
                "id": 15,
                "time": null,
                "weight": 40,
                "repetitions": 10,
                "exercise": {
                    "id": 2,
                    "name": "przysiady",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 16,
                "time": null,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 2,
                    "name": "przysiady",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 17,
                "time": null,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 3,
                    "name": "martwe ciągi",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 18,
                "time": null,
                "weight": 45,
                "repetitions": 8,
                "exercise": {
                    "id": 3,
                    "name": "martwe ciągi",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 19,
                "time": null,
                "weight": null,
                "repetitions": 8,
                "exercise": {
                    "id": 4,
                    "name": "podciągnięcia",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 20,
                "time": null,
                "weight": 5,
                "repetitions": 8,
                "exercise": {
                    "id": 4,
                    "name": "podciągnięcia",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 21,
                "time": null,
                "weight": 6,
                "repetitions": 10,
                "exercise": {
                    "id": 5,
                    "name": "wiosłowanie hantlą",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 22,
                "time": null,
                "weight": 8,
                "repetitions": 10,
                "exercise": {
                    "id": 5,
                    "name": "wiosłowanie hantlą",
                    "musclePart": {
                        "id": 3,
                        "name": "plecy",
                        "iconPath": "/img/plecy.svg"
                    }
                }
            },
            {
                "id": 23,
                "time": 60,
                "weight": null,
                "repetitions": null,
                "exercise": {
                    "id": 6,
                    "name": "skakanka",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            },
            {
                "id": 24,
                "time": 20,
                "weight": null,
                "repetitions": null,
                "exercise": {
                    "id": 6,
                    "name": "skakanka",
                    "musclePart": {
                        "id": 2,
                        "name": "nogi",
                        "iconPath": "/img/nogi.svg"
                    }
                }
            }
        ]
    }
];

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
    console.log('dzien tygodnia 1 dnia w miesiacu: ' + dayOfWeekOfFirstDayInMonth);

    // nie wiem czemu tak powinno byc po prostu -dayOfWeekOfFirstDayInMonth ale wtedy nie dzialalo ;P
    let minusDays = (-dayOfWeekOfFirstDayInMonth + 1);
    console.log('minusDay ' + minusDays);
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

/**
 * tworzy zawsze tablice z 6 tablicami ( ilosc tygodni ) w kazdej z tablic jest
 * kolejnych 7 tablic (ilosc dni) w formacie
 *  [
 *      [
 *          {
 *              dayNumber: 30,
 *              element : {
 *                  type: "training",
 *                  icon: "fa fa-check",
 *                  id: 192873
 *              }
 *          },
 *          {
 *              dayNumber: 31,
 *              element: null
 *          },
 *          ..
 *      ]
 *  ]
 *
 */

function createDaysInMonth(date, wrappedTrainings) {
    console.log(date);
    const firstDay = getFirstMondayInCalendar(date);
    console.log(firstDay);
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

/**
 * Generuje wiersz na podstawie tygodnia
 *
 */

function generateRow(week) {
    return '<tr>' +
        week.map(day => {
            if (day.element === null) {
                return '<td><div>' + day.dayNumber + '</div></td>';
            } else {
                // tutaj zamiast data-id uzyj sobie tego onClick i jako parametr uzyj day.element.id
                return '<td><div data-id="' + day.element.id + '"><i class="' + day.element.icon + '"></i>' + day.dayNumber + '</div></td>';
            }
        }) +
        '</tr>';
}

/**
 * Generuje w sumie tabele za calendarzem
 */

function generateTable(daysIntMonth) {
    return '<table><thead></thead><tbody>' + daysIntMonth.map(week => {
        return generateRow(week);
    }) + '</tbody></table>';
}

const wrappedTrainings = wrapTrainingsWithDate(trainingsFromApi);
console.log(wrappedTrainings);
const daysIntMonth = createDaysInMonth(new Date(), wrappedTrainings);
console.log(daysIntMonth);
const calendar = generateTable(daysIntMonth);
document.getElementById('calendar').innerHTML = calendar;