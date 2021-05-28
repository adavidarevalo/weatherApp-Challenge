const moreButton = document.querySelector(".moreButton")
const mainMore = document.querySelector(".mainMore")
const arrowUp = document.querySelector(".fa-arrow-circle-up ")
const arrowDown= document.querySelector(".fa-arrow-circle-down ")
moreButton.addEventListener("click", ()=>{
  mainMore.classList.toggle("displayNone")
  arrowUp.classList.toggle("displayNone")
  arrowDown.classList.toggle("displayNone")
})