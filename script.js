const icon=document.querySelector(".icon");
const nav=document.querySelector("nav");
const header=document.querySelector("header");
const links=document.querySelectorAll("nav a");

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
