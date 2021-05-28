const searchCountryButton = document.querySelector("#searchCountryButton")
const searchCountryInput = document.querySelector("#searchCountryInput")
apiCountry("Ecuador")
searchCountryButton.addEventListener("click", ()=>{
    if(searchCountryInput.value==""){
        searchCountryInput.style="border:1px solid red;"
    } else {
        apiCountry(searchCountryInput.value)
        closeButton();
        searchCountryInput.value=""
        searchCountryInput.style="border:none;"
    }
})

async function apiCountry(dataCountry){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataCountry}&appid=7daaca17f73b8537056bf2d813d49c18`)
        const data = await res.json()
        weatherTime(data);
        moreInfo(data)
      } catch (error) {
        console.log(error)
      }
}

function weatherTime(printData){
    let weatherNivel = document.querySelector("#weatherNivel")
    weatherNivel.innerHTML=`
    <p>${Math.floor(printData.main.temp - 273.15)}<span>°C</span></p>
    <p class="weatherNivelCountry">${printData.name}</p>
    `
    console.log(printData)
}

//search Country
const headerSearch = document.querySelector("#headerSearch")
headerSearch.addEventListener("click", ()=>{
    let searchCountry = document.querySelector("#searchCountry")
    searchCountry.classList.remove("displayNone")
    headerSearch.classList.add("displayNone")
    headerSearchClose.classList.remove("displayNone")
    headerLocation.style="display:none;"
})
//close search Country
const headerSearchClose = document.querySelector("#headerSearchClose")
headerSearchClose.addEventListener("click", ()=>{
    closeButton()
})
function closeButton(){
    let searchCountry = document.querySelector("#searchCountry")
    searchCountry.classList.add("displayNone")
    headerSearchClose.classList.add("displayNone")
    headerSearch.classList.remove("displayNone")
    headerLocation.style="display:block;"
}
function moreInfo(dataMore) {
  console.log(dataMore)
  //Wind Status
  document.querySelector("#mainMoreWind").innerHTML=`${dataMore.wind.speed}<span>mph</span>`
  //Humidity
  document.querySelector("#mainMoreHumidity").innerHTML=`${dataMore.main.humidity}<span>%</span>`
  //visibility
  document.querySelector("#mainMoreVisibility").innerHTML=`${dataMore.visibility}<span>miles</span>`
  //Air 
  document.querySelector("#mainMoreAir").innerHTML=`${dataMore.main.pressure}<span>mb</span>`
}