// script.js
const apiKey = '5655fddb386b6ccf480a7a2339c32d35'; // You would paste your free OpenWeatherMap key here
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-search');
const tempDisplay = document.getElementById('temp-display');
const weatherCondition = document.getElementById('weather-condition');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    // The API waiter taking our order
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Injecting the fetched data into our HTML elements
            tempDisplay.textContent = `${Math.round(data.main.temp)}°C`;
            weatherCondition.textContent = data.weather[0].main;
        })
        .catch(error => {
            weatherCondition.textContent = "City not found";
            console.error("Error fetching data:", error);
        });
});