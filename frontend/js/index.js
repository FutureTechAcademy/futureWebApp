// CopyRights Date 
let copyPara=document.getElementById("footer-copy")
let date=new Date()
let year = date.getFullYear()
let copyright="@ Future Tech Academy "+year+", All rights reserved"
copyPara.innerHTML=copyright

// SlideShow
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider div');
  const totalSlides = slides.length;

  // Reset all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show current slide
  slides[index].style.display = 'block';
}

// Next Slide Function
function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.slider div').length;
  showSlide(currentIndex);
}

// Initialize first slide
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

