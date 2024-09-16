let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function choice(n) {
    var ch = document.getElementById('ch');
    if(n==1)
        {
            ch.src="images/c7.jpeg"
        }
    else if(n==2)
        {
            ch.src="images/c8.jpeg"
        }
    else if(n==3)
        {
            ch.src="images/c9.jpeg"
        }     
  }

 // Get the elements by their ID
 var popupLink = document.getElementById("popup-link");
 var popupWindow = document.getElementById("popup-window");
 var closeButton = document.getElementById("form_closebutton");
 // Show the pop-up window when the link is clicked
 popupLink.addEventListener("click", function(event) {
   event.preventDefault();
   popupWindow.style.display = "block";
 });
 // Hide the pop-up window when the close button is clicked
 closeButton.addEventListener("click", function() {
   popupWindow.style.display = "none";
 });
  