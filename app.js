const apiKey = "b22e26db3bde7aa5dc4317cf09cef3c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchHa = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp} &deg;C`;  
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} km/h`;
}

searchBtn.addEventListener("click", () => {
        checkWeather(searchHa.value);
});
