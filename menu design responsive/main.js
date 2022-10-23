const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".burger div");
const menu = document.querySelector("ul");
const items = document.querySelectorAll("ul li");

burger.addEventListener("click",()=>{
    menu.classList.toggle("visible");
    lines.forEach(item=>{
        item.classList.toggle("open");
        item.style.transition="0.3s ease-in";
    });

    items.forEach((item, index)=>{
        if(item.style.animation){
            item.style.animation="";
        }else{
            item.style.animation=`itemmove ${index/2}s ease`;
        }

        
    })
    

});









