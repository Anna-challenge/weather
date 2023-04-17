let date = new Date();
let time = document.querySelector("h3");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
time.innerHTML = `${day} ${hours}:${minutes}`;

//declaring input variable which can be used outside the function showCity()
let input = localStorage.getItem("input");
//function which gets user input
function showCity() {
  location.reload(); //reloads page
  input = document.getElementById("userInput").value;
  localStorage.setItem("input", input);
}

let apiKey = "a867e25f2d83db579421a57fd8e937ec";
let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric`;

//function which shows current weather
function weather(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  let tempCity = document.querySelector("h2");
  tempCity.innerHTML = `${temp} °C `;
  let info = response.data.weather[0].main;
  let extraInfo = document.querySelector("h4");
  extraInfo.innerHTML = info;
}

axios.get(`${urlCity}&appid=${apiKey}`).then(weather);

let h1 = document.querySelector("h1");
h1.innerHTML = input;

//function which alerts latitude and longitude
function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  alert(`Your latitude is ${lat} and your longitude is ${lon}`);
}

function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", showLocation());
