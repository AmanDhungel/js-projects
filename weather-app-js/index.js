async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weather-info');

    if (cityInput.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    const apiKey = 'a8e71c9932b20c4ceb0aed183e6a83bb'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const weatherData = await response.json();

      if (weatherData.cod !== '404') {
        // Display weather information
        weatherInfo.innerHTML = `
          <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
          <p>Temperature: ${weatherData.main.temp} °C</p>
          <p>Description: ${weatherData.weather[0].description}</p>
          <p>Humidity: ${weatherData.main.humidity}%</p>
          <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;
      } else {
        weatherInfo.innerHTML = `<p style="color: red;">City not found. Please check the city name.</p>`;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = `<p style="color: red;">Error fetching weather data. Please try again later.</p>`;
    }
  }