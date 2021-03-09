// DOM SELECTORS
const currentDay = document.getElementById("currentDay");
const timeBlockContainer = document.getElementById("timeBlockContainer");
const descriptions = document.querySelectorAll(".description");
const descriptionsArray = Array.prototype.slice.call(descriptions); // descriptions to array
const hours = document.querySelectorAll(".hour");
const hoursArray = Array.prototype.slice.call(hours); // hours to array

// FUNCTIONS
const saveEvent = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("saveBtn")) {
    if (e.target.previousElementSibling.value !== "") {
      const eventKey = e.target.previousElementSibling.name;
      const eventValue = e.target.previousElementSibling.value;
      localStorage.setItem(eventKey, eventValue);
    }
  }
};

// Moment Object
const now = moment();

// ex. 9:40 PM

for (let i = 0; i < hoursArray.length; i++) {
  if (now.isBefore(hoursArray[i].innerText)) {
    console.log("time is before this");
  }
}

// Inject current day into DOM
currentDay.innerText = now.format("MM/DD/YYYY");

// EVENT LISTNERS
timeBlockContainer.addEventListener("click", saveEvent);

// fetch events from local storage
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage) {
    // create array of LS keys
    const eventTimes = Object.keys(localStorage);

    for (let i = 0; i < descriptionsArray.length; i++) {
      for (let y = 0; y < eventTimes.length; y++) {
        if (descriptionsArray[i].name == eventTimes[y]) {
          descriptionsArray[i].innerText = localStorage.getItem(eventTimes[y]);
        }
      }
    }
  }
});
