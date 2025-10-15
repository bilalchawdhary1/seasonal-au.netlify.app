// document.addEventListener("DOMContentLoaded", function () {
//   // 🌤️ Fetch Seasonal Data (Your existing logic)
//   async function fetchData() {
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });

//     const currentMonth = today.getMonth() + 1;
//     let seasonTitle = "";
//     let seasonSubtitle = "";

//     if (currentMonth >= 12 || currentMonth < 2) {
//       seasonTitle = "First Summer";
//       seasonSubtitle = "Hot and dry weather begins.";
//     } else if (currentMonth >= 2 && currentMonth < 4) {
//       seasonTitle = "Second Summer";
//       seasonSubtitle = "Peak heat season.";
//     } else if (currentMonth >= 4 && currentMonth < 6) {
//       seasonTitle = "Autumn";
//       seasonSubtitle = "Cooler winds and clear skies.";
//     } else if (currentMonth >= 6 && currentMonth < 8) {
//       seasonTitle = "Winter";
//       seasonSubtitle = "Cold and cloudy days.";
//     } else if (currentMonth >= 8 && currentMonth < 10) {
//       seasonTitle = "First Spring";
//       seasonSubtitle = "Flowers start blooming.";
//     } else {
//       seasonTitle = "Second Spring";
//       seasonSubtitle = "Pleasant and sunny days.";
//     }

//     document.getElementById("season-title").textContent = seasonTitle;
//     document.getElementById("season-subtitle").textContent = seasonSubtitle;
//     document.getElementById("season-date").textContent = formattedDate;
//   }

//   // 🌦️ Fetch Live Weather for Lahore
//   async function fetchWeatherData() {
//     const apiKey = "2dad9baf8d4368d2ab19f7dec7d0617d";
//     const city = "Lahore";
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       const temperature = Math.round(data.main.temp);
//       document.getElementById(
//         "temperature-info"
//       ).textContent = `${temperature}°C`;

//       const iconCode = data.weather[0].icon;
//       const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

//       const weatherIcon = document.getElementById("weather-icon");
//       weatherIcon.src = iconUrl;
//       weatherIcon.alt = data.weather[0].description;
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       document.getElementById("temperature-info").textContent =
//         "Weather Unavailable";
//     }
//   }

//   // 🕒 Run everything
//   fetchData();
//   fetchWeatherData();
//   setInterval(fetchWeatherData, 3600000); // Refresh weather hourly
// });
document.addEventListener("DOMContentLoaded", function () {
  // --- SHOW SEASON INFO + HOVER TEXT CHANGE ---
  function showSeasonInfo() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const currentMonth = today.getMonth() + 1;
    let seasonTitle = "";
    let seasonSubtitle = "";
    let hoverText = "";

    if (currentMonth >= 12 || currentMonth < 2) {
      seasonTitle = "First Summer";
      seasonSubtitle = "Hot and dry weather begins.";
      hoverText = "Long sunny days with high temperatures ☀️";
    } else if (currentMonth >= 2 && currentMonth < 4) {
      seasonTitle = "Second Summer";
      seasonSubtitle = "Peak of the heat season.";
      hoverText = "Very warm days — stay hydrated 🧃";
    } else if (currentMonth >= 4 && currentMonth < 6) {
      seasonTitle = "Autumn";
      seasonSubtitle = "Cooler winds and clear skies.";
      hoverText = "Leaves start falling 🍂";
    } else if (currentMonth >= 6 && currentMonth < 8) {
      seasonTitle = "Winter";
      seasonSubtitle = "Cold and cloudy days.";
      hoverText = "Chilly winds and warm clothes ❄️";
    } else if (currentMonth >= 8 && currentMonth < 10) {
      seasonTitle = "First Spring";
      seasonSubtitle = "Flowers start blooming.";
      hoverText = "Colorful blossoms and mild sunshine 🌸";
    } else {
      seasonTitle = "Second Spring";
      seasonSubtitle = "Pleasant and sunny days.";
      hoverText = "Perfect weather for outings 🌤️";
    }

    const title = document.getElementById("season-title");
    const subtitle = document.getElementById("season-subtitle");
    const date = document.getElementById("season-date");
    const container = document.getElementById("season-container");

    // Set initial content
    title.textContent = seasonTitle;
    subtitle.textContent = seasonSubtitle;
    date.textContent = formattedDate;

    // Hover interaction
    container.addEventListener("mouseenter", () => {
      title.textContent = hoverText;
    });

    container.addEventListener("mouseleave", () => {
      title.textContent = seasonTitle;
    });
  }

  // --- FETCH WEATHER DATA FOR LAHORE ---
  async function fetchWeatherData() {
    const apiKey = "2dad9baf8d4368d2ab19f7dec7d0617d";
    const city = "Lahore";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].main;
      document.getElementById(
        "temperature-info"
      ).textContent = `${description} ${temperature}°C`;

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
      document.getElementById("weather-icon").src = iconUrl;
    } catch (error) {
      console.error("Weather fetch failed:", error);
      document.getElementById("temperature-info").textContent =
        "Weather unavailable";
    }
  }

  showSeasonInfo();
  fetchWeatherData();
  setInterval(fetchWeatherData, 3600000); // refresh hourly
});
