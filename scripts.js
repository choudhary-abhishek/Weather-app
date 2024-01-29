 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '139c1b1adcmsh8a735bf8045899dp19a822jsn738690cdcb4d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=> {
    cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
.then(response =>response.json())
.then(response =>{
    // console.log(response)
    feels_like.innerHTML = response.feels_like

    max_temp.innerHTML = response.max_temp

    min_temp.innerHTML = response.min_temp

    sunrise.innerHTML = response.sunrise

    sunset.innerHTML = response.sunset

    temp.innerHTML = response.temp

    wind_degrees.innerHTML = response.wind_degrees

    wind_speed.innerHTML = response.wind_speed

    humidity.innerHTML = response.humidity
})
.catch(err => console.log(err));
}



submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});


function onNavItemClick(id) {
    getWeather(id);
}




const get_Weather =(city)=> {
    cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
.then(response =>response.json())
.then(response =>{
    // console.log(response)
    feels_like1.innerHTML = response.feels_like

    max_temp1.innerHTML = response.max_temp

    min_temp1.innerHTML = response.min_temp

    sunrise1.innerHTML = response.sunrise

    sunset1.innerHTML = response.sunset

    temp1.innerHTML = response.temp

    wind_degrees1.innerHTML = response.wind_degrees

    wind_speed1.innerHTML = response.wind_speed

    humidity1.innerHTML = response.humidity
})
.catch(err => console.log(err));
}
get_Weather("Goa");

getWeather("Haridwar");