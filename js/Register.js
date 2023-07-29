//register
var regesterName=document.getElementById('regesterName')
var regesterMail=document.getElementById('regesterMail')
var regesterPassword=document.getElementById('regesterPassword')
var regesterBtn=document.getElementById('regesterBtn')
var register_list;
if( localStorage.getItem('Rinput')===null){
    register_list=[];
}else{
    register_list=JSON.parse(localStorage.getItem('Rinput'))
}

function Rcreate(){
    var register={
        RName:regesterName.value,
        RMail:regesterMail.value,
       RPassword:regesterPassword.value
    }
    register_list.push(register)
 localStorage.setItem('Rinput',JSON.stringify(register_list))
console.log(register)
console.log(register_list)
}
function Rclear(){
    regesterName.value=''
    regesterMail.value=''
    regesterPassword.value=''
}

regesterBtn.onclick=Rclear