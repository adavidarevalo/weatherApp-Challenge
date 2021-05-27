let date = Date()
let separationDate = date.split(" ")
let separationDateHour = separationDate[4].split(":")
let hour = separationDateHour[0]
const bodyContainer = document.querySelector("#bodyContainer")
if(hour<18){
    document.getElementById("mainGreetings").innerHTML="GOOD DAY, IT'S CURRENTLY"
    iconDay("fa-sun")
    bodyContainer.style = "background-image: url(https://www.wallpaperimageshd.com/uploads/2019/05/dark-mountain-nature.jpg);"
} else {
    document.querySelector("#mainGreetings").innerHTML="GOOD NIGTH, IT'S CURRENTLY"
    iconDay("fa-moon")
    bodyContainer.style = "background-image:url(https://i2.wp.com/wallpapershome.com/images/wallpapers/night-sky-3840x2160-5k-4k-wallpaper-stars-mountains-bridge-new-zealand-547.jpg); "
}
function iconDay(data){
    let mainGreetingsIcon = document.createElement("i")
    mainGreetingsIcon.className=`fas ${data}`
    document.getElementById("mainGreetingsContainer").appendChild(mainGreetingsIcon)
}