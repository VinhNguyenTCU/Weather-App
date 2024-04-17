const apiKey = "b22e26db3bde7aa5dc4317cf09cef3c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if (response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.dispay = 'none';
    document.querySelector('.error p').innerHTML = `Invalid City Name`;
    }else{
        
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp} &deg;C`;  
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} km/h`;

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "/assets/weather-app-img/images/clouds.png";
    }else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "/assets/weather-app-img/images/drizzle.png";
    }else if (data.weather[0].main == 'Clear'){
        weatherIcon.src = "/assets/weather-app-img/images/clear.png";
    }else if (data.weather[0].main == 'Humidity'){
        weatherIcon.src = "/assets/weather-app-img/images/humidity.png";
    }else if (data.weather[0].main == 'Mist'){
        weatherIcon.src = "/assets/weather-app-img/images/mist.png";
    }else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = "/assets/weather-app-img/images/rain.png";
    }else if (data.weather[0].main == 'Snow'){
        weatherIcon.src = "/assets/weather-app-img/images/snow.png";
    }else if (data.weather[0].main == 'Wind'){
        weatherIcon.src = "/assets/weather-app-img/images/wind.png";
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


