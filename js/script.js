//register
var regesterName=document.getElementById('regesterName')
var regesterMail=document.getElementById('regesterMail')
var regesterPassword=document.getElementById('regesterPassword')
var regesterBtn=document.getElementById('regesterBtn')
var sucess=document.getElementById('sucess')
var isRequired=document.getElementById('isRequired')
var link=document.querySelector('a')
var mailexist=document.getElementById('mailexist')
var regesterList;
//login
var loginEmail=document.getElementById('loginEmail')
var loginPassword=document.getElementById('loginPassword')
var loginBtn=document.getElementById('loginBtn')
var incorrect=document.getElementById('incorrect')
var fields_required=document.getElementById('fields_required')
//home
var home_text=document.getElementById('home_text')
var logoutBtn=document.getElementById('logoutBtn')
//login
if( localStorage.getItem('Rinput')===null){
    regesterList=[];
}else{
    regesterList=JSON.parse(localStorage.getItem('Rinput'))
}

function Rcreate(){
    var register={
        RName:regesterName.value,
        RMail:regesterMail.value,
       RPassword:regesterPassword.value
    }
    regesterList.push(register)
 localStorage.setItem('Rinput',JSON.stringify(regesterList))
}
function Rclear(){
    regesterName.value=''
    regesterMail.value=''
    regesterPassword.value=''
}


function REmailvalidation(){
// var Ename =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
var Ename =  /^[a-z]{3,}$/ ;
var emails =regesterMail.value;
if (Ename.test(emails)){
return true
}
else{
return false

}}

function Rpasswordvalidation(){
    var nameRegex = /^[a-z]{4,}$/;
    var PName =regesterPassword.value;
    if (nameRegex.test(PName)){
return true
    }
    else{
return false
    
}}
function RNamevalidation(){
    var Regex = /^[a-z]{4,}$/;
    var Rname =regesterName.value;
    if (Regex.test(Rname)){
return true
    }
    else{
return false
    
}}


function validmail() {
    for (var i=0;i<regesterList.length;i++) {
      if (regesterMail.value == regesterList[i].RMail) {
        return true;
      } else {
        return false;
      }
    }
  }

function regesteration(){
    if (REmailvalidation()== true && Rpasswordvalidation()== true && RNamevalidation()== true) {
        if ( validmail() == true){
            mailexist.classList.replace('d-none','d-flex')
            sucess.classList.replace('d-flex','d-none')
            isRequired.classList.replace('d-flex','d-none')
            mailexist.style.color = "red";

        }
        else{
            Rcreate()
                 Rclear()
                 sucess.classList.replace('d-none','d-flex')
                 isRequired.classList.replace('d-flex','d-none')
                 link.setAttribute('href','./index.html')
        }}
        else{
            sucess.classList.replace('d-flex','d-none')
            isRequired.classList.replace('d-none','d-flex') 
            isRequired.style.color = "red";
  
             }
}


    function loginmail() {
   var  lEmail=loginEmail.value
    var LPassword=loginPassword.value
    if (loginEmail.value == '' || loginPassword.value == '') {
        incorrect.classList.replace('d-flex','d-none')
        fields_required.classList.replace('d-none','d-flex') 
        fields_required.style.color = "red";   

         
    }
    else {
      for (var i = 0; i < regesterList.length; i++) {
        console.log(regesterList[i].RMail==lEmail && regesterList[i].RPassword==LPassword)
        if(lEmail==regesterList[i].RMail &&LPassword==regesterList[i].RPassword){
            window.location.href = "home.html";
            localStorage.setItem('username',JSON.stringify(regesterList[i].RName))
        }
      else{
        fields_required.classList.replace('d-flex','d-none')
        incorrect.classList.replace('d-none','d-flex') 
        incorrect.style.color = "red";
        }
      }
    }
}
  

function loadData(){
    home_text.innerHTML= `welcome ${ JSON.parse(localStorage.getItem('username'))}`
    console.log( `welcome ${ JSON.parse(localStorage.getItem('username'))}`)

}
  if(logoutBtn != null){
    logoutBtn.onclick=function(){
        window.location.href = "./regester.html";
       
    }
  }
