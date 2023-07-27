let temperature = document.getElementById('temperature');
let time = document.getElementById('time');
let cityName = document.getElementById('cityName');
let bottomTemp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let submit = document.getElementById('search-button');
let image = document.getElementById('weatherImg');

cityName.innerText = 'Bulacan';
temperature.innerText = '0°C';
bottomTemp.innerText = '0°C';
humidity.innerText = '0';
wind.innerText = '0km/h';
 
submit.addEventListener('click', weather);
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    weather(event);
  }
});
function weather(event){
    if(event.type==='click'||event.key==='Enter'){
    let inputtedCity = document.getElementById('search').value;
    let apiKey = '4a91b1899117afe601de6fa45d3bb8d9';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputtedCity}&appid=${apiKey}&units=metric`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true)
    xhr.onload = function(){
        if(this.status == 200){
        let currentWeather = JSON.parse(this.responseText);
        let condition = currentWeather.weather[0].main;
        switch(condition){
            case 'Clear' :image.setAttribute('src','images/clear-sky.png');
            document.getElementById('img-details').innerText = 'Clear Sky'
            break;

            case 'Rain' :image.setAttribute('src','images/rainy.png');
            document.getElementById('img-details').innerText = 'Rainy'
            break;

            case 'Clouds' :image.setAttribute('src','images/clouds.png');
            document.getElementById('img-details').innerText = 'Cloudy'
            break;

            case 'Snow' :image.setAttribute('src','images/snow.png');
            document.getElementById('img-details').innerText = 'Snow'
            break;

            case 'Thunderstorm' :image.setAttribute('src','images/storm.png');
            document.getElementById('img-details').innerText = 'Thunderstorms'
            break;

            case 'Wind' :image.setAttribute('src','images/wind.png');
            document.getElementById('img-details').innerText = 'Windy'
            break;

            case 'Smoke' : image.setAttribute('src','images/carbon-dioxide.png');
            document.getElementById('img-details').innerText = 'Smokey'
            break;

            
        }
        cityName.innerText = currentWeather.name;
        temperature.innerText = Math.round(currentWeather.main.temp)+'°C';
        bottomTemp.innerText= Math.round(currentWeather.main.temp)+'°C';
        humidity.innerText = currentWeather.main.humidity;
        wind.innerText = currentWeather.wind.speed + 'km/h';
        
        console.log(currentWeather);
        }
    }
    xhr.send();
}
}
