function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());

 var seconds = Math.floor((t / 1000) % 60); // convert total seconds to number of seconds by diving total seconds by number of seconds remaining after days,hours, and minutes are account for
    var minutes = Math.floor((t / 1000 /60) % 60); // convert total seconds to number of minutes by diving total seconds by number of minutes remaining after days and hours are account for
    var hours = Math.floor((t / (1000 * 60 *60)) % 24); // convert total seconds to number of hours by diving total seconds by number of hours remaining after days are accounted for 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
  debugger;
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);

initializeClock("clockdiv", deadline);
