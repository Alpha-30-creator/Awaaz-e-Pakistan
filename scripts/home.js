function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    }
  else {
    x.className = "topnav";
    }
}
function donation(){
  alert("This function is not available right now. Please try again later.")
}
function Exec_team(){
  document.querySelector(".direc-team").style.display = "none";
  document.querySelector(".head-team").style.display = "none";
  if (document.querySelector(".exec-team").style.display == "none") {
    document.querySelector(".exec-team").style.display = "flex";
  }
  else {
    document.querySelector(".exec-team").style.display = "none";
  }
}
function Direc_team(){
  document.querySelector(".exec-team").style.display = "none";
  document.querySelector(".head-team").style.display = "none";
  if (document.querySelector(".direc-team").style.display == "none") {
    document.querySelector(".direc-team").style.display = "flex";
  }
  else {
    document.querySelector(".direc-team").style.display = "none";
  }
}
function Head_team(){
  document.querySelector(".exec-team").style.display = "none";
  document.querySelector(".direc-team").style.display = "none";
  if (document.querySelector(".head-team").style.display == "none") {
    document.querySelector(".head-team").style.display = "flex";
  }
  else {
    document.querySelector(".head-team").style.display = "none";
  }
}
