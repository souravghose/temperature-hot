const API_KEY = `d49c001d4b2713fd095acffb535b727b`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
} 
const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    console.log(temperature);
    setInnertext('city', temperature.name);
    setInnertext('temperature', temperature.main.temp);
    setInnertext('condition', temperature.weather[0].main)

    //setting weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    
    imgIcon.setAttribute('src', url);
}