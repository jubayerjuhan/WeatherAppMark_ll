document.getElementById('sub-btn').addEventListener('click', function (){
    const primaryURL = "https://api.openweathermap.org/data/2.5/weather?q="
    const cityName = document.getElementById('city-name').value;
    const apiKey = "&appid=e614f366afcadbe875379ef299e9198e&units=metric"

    const fetchingURL = `${primaryURL}${cityName}${apiKey}`
    console.log(fetchingURL)

    fetch (fetchingURL)
    .then(response => response.json())
    .then(data => 
        {
        const weatherStatus = data.weather[0].main
        document.getElementById('temp').innerText = data.main.temp
        document.getElementById('weatherStatus').innerText = weatherStatus; 
        document.getElementById('cityName').innerText = data.name;
        const iconStatus = data.weather[0].icon;
        document.getElementById('WeatherStatus').innerHTML = `<img src='https://openweathermap.org/img/wn/${iconStatus}.png'>`
    })
    .catch(error => {
        const errorMessage = "Sorry Pal The City Not Found. Maybe You Mistyped The Name, Check Again :)"
        document.getElementById('cityName').innerText = `${errorMessage}`
    })

})