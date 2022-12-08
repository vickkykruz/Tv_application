let txtuser = document.querySelector("txtuser");
let txtpass = document.querySelector("txtpass");
let submit = document.querySelector("submit");

//if(window.localStorage){
//console.log("supported");

//store value using key and pair
localStorage.setItem("user", "onwuegbuchulemvic02@gmail.com");
localStorage.setItem("pass","victorchi232312");

let user = localStorage.getItem("user");
let pass = localStorage.getItem("pass");

let message = document.querySelector(".message");

 submit.addEventListener("click",() =>{
    if (user == txtuser.value &&pass == txtpass.value){
        message.innerHTML = "Login sucessful....."
    }else {
        message.innerHTML = "Usernsme or password invaild"
    }
})
// }else{
//     console.log("not supported")
// }