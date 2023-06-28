let main_input = document.getElementById("search__input")
let main = ()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.860966&lon=66.990501&q=${search__input.value}&appid=1502934fbaa78da2c7d642461ba15103&units=metric`)
    .then((res) => res.json())
    .then((res) => {
        let get = document.getElementById("degree-celcius")
        get.innerHTML =Math.round( res.main.temp) + "°C"
        let wind = document.getElementById("wind")
        wind.innerHTML = res.wind.speed +"km/h"
        let description = document.getElementById("description")
        description.innerHTML = res.weather[0].main
        let humidity = document.getElementById("humidity")
        humidity.innerHTML = res.main.humidity + "%"
        let country = document.getElementById("country")
        country.innerHTML = res.name + ", " + res.sys.country
        let whether_images = document.getElementById("wheather-main-inner-image")
        if(res.weather[0].main === `Clouds`){
            whether_images.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
        }
        else if(res.weather[0].main === `Mist`){
            whether_images.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png"
        }
        else if(res.weather[0].main === `Fog`){
            whether_images.src = "https://w7.pngwing.com/pngs/244/421/png-transparent-weather-clouds-fog-foggy-weather-color-icon.png"
        }
        else if(res.weather[0].main === `Smoke`){
            whether_images.src = "https://cdn-icons-png.flaticon.com/512/3540/3540959.png"
        }
        else if(res.weather[0].main === `Clear`){
            whether_images.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png"
        }
        else if(res.weather[0].main === `Haze`){
            whether_images.src = "https://www.nicepng.com/png/detail/123-1236627_haze-icon-png-haze-weather-icon.png"
        }
        else if(res.weather[0].main === `Rain`){
            whether_images.src = "https://files.softicons.com/download/web-icons/vector-stylish-weather-icons-by-bartosz-kaszubowski/png/256x256/cloud.rain.png"
        }
        else{
            whether_images.src = "https://w7.pngwing.com/pngs/166/384/png-transparent-cloud-sun-sunny-weather-weather-flat-icon.png"
        }
    })
    .catch((err) => {
        console.log(err)
    })
}