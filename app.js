const apiKey = "b22e26db3bde7aa5dc4317cf09cef3c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();