const getWeather = () => {
    const input = document.getElementById("search__input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1502934fbaa78da2c7d642461ba15103&units=metric`)
        .then(res => res.json())
        .then(res => {
            document.getElementById("degree-celcius").textContent = Math.round(res.main.temp) + "°C";
            document.getElementById("wind").textContent = res.wind.speed + " km/h";
            document.getElementById("description").textContent = res.weather[0].main;
            document.getElementById("humidity").textContent = res.main.humidity + "%";
            document.getElementById("country").textContent = res.name + ", " + res.sys.country;

            const iconMap = {
                Clouds: "https://cdn-icons-png.flaticon.com/512/4834/4834559.png",
                Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
                Fog: "https://w7.pngwing.com/pngs/244/421/png-transparent-weather-clouds-fog-foggy-weather-color-icon.png",
                Smoke: "https://static.vecteezy.com/system/resources/previews/024/729/179/original/night-strong-wind-icon-weather-forecast-sign-png.png",
                Clear: "https://cdn-icons-png.flaticon.com/512/3222/3222800.png",
                Haze: "https://cdn-icons-png.flaticon.com/512/1779/1779807.png",
                Rain: "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            };

            document.getElementById("weather-icon").src = iconMap[res.weather[0].main] || "https://w7.pngwing.com/pngs/166/384/png-transparent-cloud-sun-sunny-weather-weather-flat-icon.png";
        })
        .catch(err => console.log(err));
    };

const backgrounds = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Mountains, default
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8", // Sunrise
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Waterfall
];

let bgIndex = 0;
function toggleBackground() {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
}
