const calculateButton = document.querySelector('.calculate');
const monthAndDay = [
    { month: 'Jan', day: 31},
    { month: 'Feb', day: 28},
    { month: 'Mar', day: 31},
    { month: 'Apr', day: 30},
    { month: 'May', day: 31},
    { month: 'Jun', day: 30},
    { month: 'Jul', day: 31},
    { month: 'Aug', day: 31},
    { month: 'Sep', day: 30},
    { month: 'Oct', day: 31},
    { month: 'Nov', day: 30},
    { month: 'Dec', day: 31}
]

calculateButton.addEventListener('click', () => {

    let enteredFirstDate = document.querySelectorAll('.date')[0].value;
    let firstDateInMilisecond = new Date(enteredFirstDate).getTime()
    // gets the time of first date in milisecond
    let secondDateInMilisecond = new Date().getTime()
    // gets the time of second date in milisecond
    let firstDateYear = new Date(enteredFirstDate).getFullYear()
    // gets the year of the first date
    let firstDateMonthIndex = new Date(enteredFirstDate).getMonth()
    // gets the index of the first month, returns number
    let secondDateYear = new Date().getFullYear()
    // gets the year of the second date
    let leapYears = []
    // initializing an empty array of leap years between the two years

    for (let i = firstDateYear; i <= secondDateYear; i++ ){
        if (i % 4 == 0) {
            leapYears.push(i)
            // if leap year adds the year to the array
        }
    }
    // loop for all the leap year
    
    
    let timeDiffMs = secondDateInMilisecond - firstDateInMilisecond
    // time difference between two date in milisecond
    const msToDay = 1000 * 3600 * 24
    // milisecond to day convertion    
    let dayDiff = Math.floor(timeDiffMs / msToDay)
    // time difference between two date in day, converting from milisecond

    if (dayDiff < 0) dayDiff = dayDiff * -1
    // solution for if day difference is negative
    

    calculate(dayDiff, leapYears)

    function calculate(dayDiff, leapYears) {
    
        let totalDays = dayDiff
        // redefining to another variable for better understanding
        let noOfLeapYear = leapYears.length
        // gets how many leap year are there between the two date    
        let actualDay = totalDays - noOfLeapYear
        // no of days after deducting the leap year days
        let noOfYear = Math.floor(actualDay / 365)
        let month = []
        // defining an empty arrayr for month
        let day = Math.floor(actualDay % 365)
        // remaining days after finding years

        if (monthAndDay[firstDateMonthIndex] == null || monthAndDay[firstDateMonthIndex] == undefined) {
            alert('Atleast select first date')
        }

        while (day >= monthAndDay[firstDateMonthIndex].day) {
            day = day - monthAndDay[firstDateMonthIndex].day
            month.push(monthAndDay[firstDateMonthIndex].month)
            firstDateMonthIndex++
        }
        // while loop for getting months

        let noOfMonth = month.length
        let noOfDays = day

        var yearBox = (document.querySelector('.year').innerHTML = noOfYear)
        var monthBox = (document.querySelector('.month').innerHTML = noOfMonth)
        var dayBox = (document.querySelector('.day').innerHTML = noOfDays)    
    }
})