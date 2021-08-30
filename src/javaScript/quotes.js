const InspirationAPI = "https://type.fit/api/quotes";
const mainWeather = document.querySelector("#main-weather")
const fetchDataPhrases = async() =>{
  try {
    let randomNumber = Math.floor(Math.random()*1643);
    const res = await fetch(InspirationAPI)
    const data = await res.json()
    phrases(data[randomNumber])
  }
  catch(error){
    console.log(error)
  }
}
fetchDataPhrases();
function phrases(data){
    document.querySelector("#mainPhrase").innerHTML=`${data.text}`
    document.querySelector("#mainPhraseAutor").innerHTML=`${data.author}`
}

document.querySelector(".fa-redo").addEventListener("click", ()=>{
  fetchDataPhrases();
})