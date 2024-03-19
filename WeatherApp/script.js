async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9212200a87msh94f9261d28ea632p1cfa6ejsn3bd2588f526c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("feels_like").innerText = " :- "+result['feels_like']
        document.getElementById("cloud_pct").innerText = " :- "+result['cloud_pct']
        document.getElementById("Sunrise").innerText = " :- "+result['sunrise']
        document.getElementById("humidity").innerText = " :- "+result['humidity']
        document.getElementById("max_temp").innerText = " :- "+result['max_temp']
        document.getElementById("min_temp").innerText = " :- "+result['min_temp']
        document.getElementById("Sunset").innerText = " :- "+result['sunset']
        document.getElementById("temp").innerText = " :- "+result['temp']
        document.getElementById("wind_degrees").innerText = " :- "+result['wind_degrees']
        document.getElementById("wind_speed").innerText = " :- "+result['wind_speed']
        return result;
        
    } catch (error) {
        console.error(error);
    }
}

// Call the asynchronous function
let result = fetchData();





