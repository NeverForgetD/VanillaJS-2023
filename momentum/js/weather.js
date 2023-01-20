/*
const currentLocation = document.querySelector(".location-line");
const weather = document.querySelector(".weather-line");

const API_KEY = "c6c75601ef9ea31aa86709c4ee68c569";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const locationData = data.name;
        const weatherData = data.weather[0].main;
        currentLocation.innerText = locationData;
        weather.innerText = weatherData;
    });
}
function onGeoError() {
    alert("Can't access to your location");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
*/