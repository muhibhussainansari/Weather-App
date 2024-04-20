function weatherApp() {
    let getSearch = document.querySelector('#getSearch')
    let getTemp = document.querySelector('#getTemp')
    let getWind = document.querySelector('#getWind')
    let getHumidity = document.querySelector('#getHumidity')
    let getCity = document.querySelector('#getCity')

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getSearch.value}&appid=a586f3c921f953b4b1923c857120770c`)
    .then(data => data.json())
    .then(data => {
        if(getSearch.value == ""){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=a586f3c921f953b4b1923c857120770c`)
            .then(data => data.json())
            .then(data => { 
                let K = data.main.temp
                C = Math.round(K - 273.15) + "°C"
                getTemp.innerHTML = C
                let wind = (data.wind.speed) +" "+"km/h"
                getWind.innerHTML = wind
                let humidity = data.main.humidity + "%"
                getHumidity.innerHTML = humidity
                getCity.innerHTML = "KARACHI, PK"
                getSearch.value = ""
            })
    .   catch(err => console.log(err))
        }
        else {
            let K = data.main.temp
            C = Math.round(K - 273.15) + "°C"
            getTemp.innerHTML = C
            let wind = (data.wind.speed) +" "+ "km/h"
            getWind.innerHTML = wind
            let humidity = data.main.humidity + "%"
            getHumidity.innerHTML = humidity
            getCity.innerHTML = getSearch.value.toUpperCase() +","+" "+ `${data.sys.country}`
            getSearch.value = ""
            console.log(data)

        }

    })
    .catch(err => console.log(err))
}
weatherApp()