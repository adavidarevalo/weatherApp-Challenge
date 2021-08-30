const moreButton = document.querySelector(".moreButton")
const mainMore = document.querySelector(".mainMore")
const arrowUp = document.querySelector(".fa-arrow-circle-up ")
const arrowDown= document.querySelector(".fa-arrow-circle-down ")
const MoreLessId= document.querySelector("#MoreLess")



moreButton.addEventListener("click", ()=>{
  mainMore.classList.toggle("displayNone")
  arrowUp.classList.toggle("displayNone")
  arrowDown.classList.toggle("displayNone")
  if(mainMore.classList.contains('displayNone')){
    MoreLessId.innerHTML = 'More'
  } else {
    MoreLessId.innerHTML = 'Less'
  }

})