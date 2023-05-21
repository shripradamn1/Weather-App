const apiKey="302caf0aa03b6fb51fa7d7605978beda";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bangalore";

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const searchwe=document.querySelector('.Weather-icon');
    
async function checkWeather(city)
{
    try{
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?appid=302caf0aa03b6fb51fa7d7605978beda&units=metric"+`&q=`+city);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";

    if(data.weather[0].main == "Clouds")
    {
        searchwe.src="clouds.png";
    }
    if(data.weather[0].main == "Rain")
    {
        searchwe.src="rain.png";
    }
    if(data.weather[0].main == "Drizzle")
    {
        searchwe.src="drizzle.png";
    }
    if(data.weather[0].main == "Rain")
    {
        searchwe.src="rain.png";
    }
    if(data.weather[0].main == "Snow")
    {
        searchwe.src="snow.png";
    }
    if(data.weather[0].main == "Clear")
    {
        searchwe.src="clear.png";
    }
    if(data.weather[0].main == "Mist")
    {
        searchwe.src="mist.png";
    }

    }
    catch{
        console.log("error");
    }
}
searchBtn.addEventListener("click",()=>
    checkWeather(searchBox.value)
);
