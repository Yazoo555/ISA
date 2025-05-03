const elements = {
  input: document.getElementById("cityInput"),
  btn: document.getElementById("searchBtn"),
  city: document.getElementById("cityName"),
  temp: document.getElementById("temperature"),
  icon: document.getElementById("weatherIcon"),
  desc: document.getElementById("weatherDesc"),
  press: document.getElementById("pressure"),
  humid: document.getElementById("humidity"),
  wind: document.getElementById("windSpeed"),
  dir: document.getElementById("windDirection"),
  error: document.getElementById("errorMsg"),
};

function errorWeatherData() {
  elements.temp.innerHTML = ``;
  elements.desc.innerHTML = ``;
  elements.press.innerHTML = ``;
  elements.humid.innerHTML = ``;
  elements.wind.innerHTML = ``;
  elements.dir.innerHTML = ``;
  elements.icon.src = "https://cdn-icons-png.flaticon.com/512/1304/1304038.png";
}

document.getElementById("date").textContent = new Date().toDateString();

async function getWeather(city) {
  try {
    const response = await fetch(
      `http://localhost/weatherApp/connection.php?q=${city}`
    );
    const data = await response.json();
    console.log(data);

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No data returned");
    }

    const weather = data[data.length - 1];

    elements.city.innerHTML = city;
    elements.temp.innerHTML = `${weather.temperature}°C`;
    elements.desc.innerHTML = weather.description;
    elements.press.innerHTML = `${weather.pressure} hPa`;
    elements.humid.innerHTML = `${weather.humidity}%`;
    elements.wind.innerHTML = `${weather.wind} m/s`;
    elements.dir.innerHTML = `${weather.wind_direction}°`;
    elements.icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  } catch (error) {
    errorWeatherData();
    elements.city.innerHTML = "City Not Found or Invalid input!";
    console.error(error);
  }
}

elements.btn.onclick = function () {
  if (elements.input.value.trim()) getWeather(elements.input.value.trim());
  else {
    elements.city.innerHTML = "Please enter a city name";
    errorWeatherData();
  }
};

getWeather("Khalanga");
