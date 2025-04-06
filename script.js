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
};

document.getElementById("date").textContent = new Date().toDateString();

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f784d9bff56f9b8cd741b329a162245&units=metric`
    );

    const data = await response.json();
    console.log(data);

    elements.city.textContent = `${data.name}, ${data.sys.country}`;
    elements.temp.textContent = `${data.main.temp}°C`;
    elements.desc.textContent = data.weather[0].description;
    elements.press.textContent = `${data.main.pressure} hPa`;
    elements.humid.textContent = `${data.main.humidity}%`;
    elements.wind.textContent = `${data.wind.speed} m/s`;
    elements.dir.textContent = `${data.wind.deg}°`;
    elements.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  } catch (error) {
    elements.city.textContent = "City not found";
  }
}

elements.btn.onclick = function () {
  if (elements.input.value.trim()) getWeather(elements.input.value.trim());
};

getWeather("Bhaktapur");
