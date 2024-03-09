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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the asynchronous function
fetchData();
