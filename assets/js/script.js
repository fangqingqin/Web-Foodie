let slideIndexes = {};

// Initialize all galleries
function initGalleries() {
  const galleryIds = ['fruit-vegetable-Gallery', 'grainsGallery', 'low-fat-dairyGallery','sugarGallery','proteinGallery'];
  galleryIds.forEach((galleryId) => {
    slideIndexes[galleryId] = 1;
    showSlides(slideIndexes[galleryId], galleryId);
    autoSlideshow(galleryId);
  });
}

// Next/previous controls
function plusSlides(n, galleryId) {
  showSlides(slideIndexes[galleryId] += n, galleryId);
}

// Thumbnail image controls
function currentSlide(n, galleryId) {
  showSlides(slideIndexes[galleryId] = n, galleryId);
}

// show slides in id = galleryId
function showSlides(n, galleryId) {
  let i;
  let container = document.getElementById(galleryId);
  let slides = container.getElementsByClassName("mySlides");
  let dots = container.getElementsByClassName("demo");
  let captionText = container.querySelector(".caption-container p");
  if (n > slides.length) {slideIndexes[galleryId] = 1}
  if (n < 1) {slideIndexes[galleryId] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexes[galleryId] - 1].style.display = "block";
  dots[slideIndexes[galleryId] - 1].className += " active";
  captionText.innerHTML = dots[slideIndexes[galleryId] - 1].alt;
}

// Add automatic slideshow functionality
function autoSlideshow(galleryId) {
  let container = document.getElementById(galleryId);
  let slides = container.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let dots = container.getElementsByClassName("demo");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  let captionText = container.querySelector(".caption-container p");

  slideIndexes[galleryId]++;
  if (slideIndexes[galleryId] > slides.length) {slideIndexes[galleryId] = 1}
  slides[slideIndexes[galleryId] - 1].style.display = "block";
  dots[slideIndexes[galleryId] - 1].className += " active";
  captionText.innerHTML = dots[slideIndexes[galleryId] - 1].alt;
  setTimeout(() => autoSlideshow(galleryId), 4000); // Change image every 4 seconds
}

// Call initGalleries function initially to preload the first slide and start the automatic slideshow
window.onload = function() {
  initGalleries();
}

/* reset form   */
function formReset(){
      document.getElementById("myform").reset();
}

// Add alert for the contact form
function mailSubmit() {
  alert("Thank you for submitting your feedback");
}



