// CopyRights Date 
let copyPara=document.getElementById("footer-copy")
let date=new Date()
let year = date.getFullYear()
let copyright="@ Future Tech Academy "+year+", All rights reserved"
copyPara.innerHTML=copyright



// SlideShow
let slider = document.querySelector(".slider")
let slides= slider.getElementsByTagName("div")
let slideWidth=document.body.clientWidth
slider.style.width=(slideWidth*slides.length)+"px"
let currentSlide=0
for(let i=0;i<slides.length;i++)
{
    slides[i].style.width=slideWidth+"px" 
}

function showNextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        slider.style.transition="margin 1s"
    } else {
        currentSlide = 0;
        slider.style.transition="none"
    }
    updateSlider();
}

function updateSlider() {
    slider.style.marginLeft = -slideWidth * currentSlide + "px";
}
setInterval(showNextSlide, 3000);


