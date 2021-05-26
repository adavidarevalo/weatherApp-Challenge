const searchCountryButton = document.querySelector("#searchCountryButton")
const searchCountryInput = document.querySelector("#searchCountryInput")
searchCountryButton.addEventListener("click", ()=>{
    if(searchCountryInput.value==""){
        alert("Campo Vacio")
    } else {
        apiCountry(searchCountryInput.value)
    }
})

async function apiCountry(dataCountry){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataCountry}&appid=7daaca17f73b8537056bf2d813d49c18`)
        const data = await res.json()
        console.log(data)
        weatherTime(data)
      } catch (error) {
        console.log(error)
      }
}

function weatherTime(printData){
    let weatherNivel = document.querySelector("#weatherNivel")
    weatherNivel.innerHTML=`
    <p>${Math.floor(printData.main.temp - 273.15)}<span>°C</span></p>
    <p>${printData.name}</p>
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
})
//close search Country
const headerSearchClose = document.querySelector("#headerSearchClose")
headerSearchClose.addEventListener("click", ()=>{
    let searchCountry = document.querySelector("#searchCountry")
    searchCountry.classList.add("displayNone")
    headerSearchClose.classList.add("displayNone")
    headerSearch.classList.remove("displayNone")
})