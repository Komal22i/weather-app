const apiKey = "32781d42b9174902926db221c474a2cf"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBtn = document.querySelector(".search-button")
const searchBox = document.querySelector(".field")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data = await response.json()



    
    document.querySelector(".city").innerHTML = data.name || "Sonipat";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"


    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "./img/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "./img/sun.png"
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "./img/rain.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "./img/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "./img/mist.png"
    }

    document.querySelector(".temp-box").style.display = "block"

    
}

searchBtn.addEventListener(("click"),()=>{
    checkWeather(searchBox.value)
})


checkWeather()