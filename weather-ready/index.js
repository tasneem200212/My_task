const apikey="b36ca476cdfa604857cdae5a8e403489";
const selectDropdown = document.querySelector(".location-button.listcity");

async function checkWeather(city) {
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const response=await fetch(url);
const data=await response.json();
console.log(data);

const daynumber=new Date().getDay();
const daynames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayname=daynames[daynumber];

// const tempf=data.main.temp;
// const tempc=((tempf-32)/1.8).toFixed(1);

const tempInFahrenheit = data.main.temp;

// Convert Fahrenheit to Celsius
const tempInCelsius = ((tempInFahrenheit - 32) / 1.8).toFixed(1);

document.getElementById("select").value=data.name;
document.querySelector(".day-temp").innerHTML=tempInCelsius+"°C";
document.querySelector(".humidity-view").innerHTML=data.main.humidity+"%";
document.querySelector(".wind-view").innerHTML=data.wind.speed+"km/h";
document.querySelector(".weather-temp").innerHTML=tempInCelsius+"°C";
document.querySelector(".location").innerHTML=data.name;
document.querySelector(".weather-desc").innerHTML=data.weather[0].description;
document.querySelector(".date-dayname").innerHTML=dayname;
document.querySelector(".date-day").innerHTML=new Date().getFullYear();

}
selectDropdown.addEventListener("click",()=>{
    checkWeather(selectDropdown.value);   
})
