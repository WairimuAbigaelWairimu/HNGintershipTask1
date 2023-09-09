//Day of the week
const today = new Date();

let day = today.getDay();
const listOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayToday = listOfDays[day];
console.log(dayToday)
document.getElementById("daytoday").innerHTML = `Today is: ${dayToday}`;


//time in UTC 
const d = new Date();
let timeinUTC = d.getTime();
console.log(timeinUTC)
document.getElementById("timeinUTC").innerHTML = `Time in UTC: ${timeinUTC}`;