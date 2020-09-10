
var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2,2000);
 
function nextSlide2() {
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (currentSlide2+1)%slides2.length;
    slides2[currentSlide2].className = 'slide2 showing2';
}