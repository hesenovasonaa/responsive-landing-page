const icon=document.querySelector(".icon");
const nav=document.querySelector("nav");
const header=document.querySelector("header");
const links=document.querySelectorAll("nav a");
const form=document.querySelector(".formAll");
const name=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const nameSpan=document.querySelector("#name-error");
const emailSpan=document.querySelector("#email-error");
const messageSpan=document.querySelector("#message-error");
const successMessage = document.querySelector("#success-message");

function second(event){
        event.preventDefault();
        nameSpan.innerHTML = "";
        emailSpan.innerHTML = "";
        messageSpan.innerHTML = "";
        name.classList.remove("invalid");
        email.classList.remove("invalid");
        message.classList.remove("invalid");
        successMessage.innerHTML = "";
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;
        if(name.value==""){
                nameSpan.innerHTML="Ad və soyad boş ola bilməz";
                name.classList.add("invalid");
                isValid = false;
        }
        if(email.value==""){
                emailSpan.innerHTML="Email boş ola bilməz";
                email.classList.add("invalid");
                isValid = false;
        }
        else if(!emailRegex.test(email.value)){
                emailSpan.innerHTML="Düzgün email daxil edin";
                email.classList.add("invalid");
                isValid = false;
        }
        if(message.value==""){
                messageSpan.innerHTML="Mesaj boş ola bilməz";
                message.classList.add("invalid");
                isValid = false;
        }
        if(isValid){
                successMessage.innerHTML = "Mesaj uğurla göndərildi!";
                form.reset();
        }
        
}
form.addEventListener("submit",second);

links.forEach(link=>{
        link.addEventListener("click",function(e){
                e.preventDefault();
                let element=document.querySelector(this.getAttribute("href"));
                element.scrollIntoView({
                        behavior: "smooth"
                })
        })
})
function first(){
        nav.classList.toggle("is-open")
        header.classList.toggle("is-open")
}
icon.addEventListener("click",first);