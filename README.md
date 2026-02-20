# 🌤️ Weather Dashboard

## Project Description
A sleek, minimal weather dashboard that allows users to check the current temperature of any city. The interface features a clean dark mode design with dynamic elements that respond to user input and network states. 

## 🌐 Live Link
[View the Live Dashboard Here](https://ayanchaturvedi.github.io/weather-dashboard)

## ✨ Features
* **City Search:** Users can enter any city name to retrieve real-time weather data.
* **Dynamic Display:** Instantly updates the UI with the current temperature in Celsius and the primary weather condition.
* **Error Handling:** Displays a user-friendly "City not found" message for invalid inputs or network errors.
* **Minimalist UI:** Features a modern, dark-themed gradient background with glassmorphism elements.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure
* **CSS3:** Styling, Flexbox, and CSS transitions
* **JavaScript (ES6):** DOM manipulation and asynchronous API fetching
* **API:** OpenWeatherMap

## 💻 Installation
To run this project locally on your machine:
1. Clone this repository: `git clone https://github.com/yourusername/weather-dashboard.git`
2. Navigate into the project folder.
3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/).
4. Open `script.js` and replace `'YOUR_API_KEY_HERE'` with your actual API key.
5. Open `index.html` in your web browser.

## 🧠 Lessons Learned
During the development of this project, I encountered a `401: Unauthorized` error when attempting to fetch data from the OpenWeatherMap API for the first time. I learned that this is a standard HTTP status code indicating an authentication failure. I diagnosed that the error occurred because the OpenWeatherMap server was still in the process of activating my newly generated API key. To resolve this, I waited about 10-15 minutes for the key to fully propagate through their system, after which the API calls succeeded without any further code changes.
