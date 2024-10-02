const temperature = document.querySelector("#current-temp");
const img = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75070929612948&lon=6.644636428503432&appid=309998491171a7d54824806d53cc6d1c&unit=imperial"

async function apiFetch() {

        var response = await fetch(url);
    
            const data = await response.json(response);
            displayResults(data);}
        

      

    
    
    



function displayResults(data){
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    let icons = data.weather[0].icon
    const iconsrc = `https://openweathermap.org/img/w/${icons}.png`;
    let desc = data.weather[0].description
    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', "Weather Icon");
    captionDesc.textContent = desc

    
  }
  apiFetch()



