let slider= document.querySelector(".btn");
let sliderup=true;
let slidermenu=document.querySelector(".slidermenu")

slider.addEventListener("click",()=>{
      if(sliderup==true){
        slidermenu.style.top="0px"
        sliderup=false
      }
      else if (sliderup==false){
        slidermenu.style.top="-1000px"
        sliderup=true
      }
      
})