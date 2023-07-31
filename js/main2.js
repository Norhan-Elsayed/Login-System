let logoutBtn=document.getElementById("logoutBtn")
let userName=document.getElementById("userName")
var homeArray=[]
if (localStorage.getItem("data") != null) {
    homeArray = JSON.parse(localStorage.getItem("data"));
  }
  logoutBtn.addEventListener("click" ,function()
  {
    window.open('index.html','_top')
  })
  userName.innerHTML='Welcome : '+homeArray[0].Name
