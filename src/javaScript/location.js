const headerLocation = document.querySelector("#headerLocation")
headerLocation.addEventListener("click", ()=>{
    localion()
})
function localion(){
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    });
}