let timeDisplay = $('#currentDay');


function runningTime() {
    let currentTimeDate = (moment().format('dddd, MMMM Do YYYY h:mm:ss a'));
    timeDisplay.text(currentTimeDate);
    setInterval(runningTime, 1000);
}

runningTime();