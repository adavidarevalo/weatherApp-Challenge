const messageError = document.querySelector("#messageError") 
const headerLocation = document.querySelector("#headerLocation")
headerLocation.addEventListener("click", ()=>{
    localion()
})
function localion(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionNow, Error);
        messageError.innerHTML=` `
      } else {
        messageError.innerHTML=`
        <p class="locationError">Geolocation is not supported by this browser.</p>
        `
      }
}

async function positionNow(position) {
    console.log(position.coords.latitude )
    console.log(position.coords.longitude )
        try {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7daaca17f73b8537056bf2d813d49c18`)
          const data = await res.json()
          console.log(data)
          let weatherNivel = document.querySelector("#weatherNivel")
          weatherNivel.innerHTML=`
          <p>${Math.floor(data.current.temp - 273.15)}<span>°C</span></p>
          <p class="weatherNivelCountry">${data.timezone}</p>
          `
          //catch
        } catch (error) {
          messageError.innerHTML=`
      <p class="locationError">Cannot to connect in this moment, try after. Thanks for use our service.</p>
      `
        }
      }



function Error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
        messageError.innerHTML=`
      <p class="locationError">User denied the request for Geolocation.</p>
      `
      break;
    case error.POSITION_UNAVAILABLE:
        messageError.innerHTML=`
      <p class="locationError">Location information is unavailable.</p>
      `
      break;
    case error.TIMEOUT:
        messageError.innerHTML=`
      <p class="locationError">The request to get user location timed out.</p>
      `
      break;
    case error.UNKNOWN_ERROR:
        messageError.innerHTML=`
      <p class="locationError">An unknown error occurred.</p>
      `
      break;
  }
}
//More information
function more(dataMore) {
  
}