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

function resetWeatherData() {
  elements.temp.innerHTML = ` `;
  elements.desc.innerHTML = ` `;
  elements.press.innerHTML = ` `;
  elements.humid.innerHTML = ` `;
  elements.wind.innerHTML = ` `;
  elements.dir.innerHTML = ` `;
  elements.icon.src = "https://cdn-icons-png.flaticon.com/512/1304/1304038.png";
}

document.getElementById("date").textContent = new Date().toDateString();

const API_key = "2f784d9bff56f9b8cd741b329a162245";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    );

    const data = await response.json();
    console.log(data);

    elements.city.innerHTML = `${data.name}, ${data.sys.country}`;
    elements.temp.innerHTML = `${data.main.temp}°C`;
    elements.desc.innerHTML = data.weather[0].description;
    elements.press.innerHTML = `${data.main.pressure} hPa`;
    elements.humid.innerHTML = `${data.main.humidity}%`;
    elements.wind.innerHTML = `${data.wind.speed} m/s`;
    elements.dir.innerHTML = `${data.wind.deg}°`;
    elements.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  } catch (error) {
    // handle the error here
    resetWeatherData();
    elements.city.innerHTML = "Invalid input!";
  }
}

elements.btn.onclick = function () {
  if (elements.input.value.trim()) getWeather(elements.input.value.trim());
  else {
    elements.city.innerHTML = "Please enter a city name";
    resetWeatherData();
  }
};

getWeather("Khalanga");
// getWeather("Dasharathchand");
