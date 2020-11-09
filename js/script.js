let pageNav = document.getElementById('pages');
let pageCard = document.getElementById('page-card');
let shopNav = document.getElementById('shop');
let shopCard = document.getElementById('shop-card');
let categoryImg = document.getElementsByClassName('.item-img');

function displayPage() {
  pageCard.style.display = 'block';
}

function removePage() {
  pageCard.style.display = 'none';
}

function displayShop() {
  shopCard.style.display = 'flex';
}

function removeShop() {
  shopCard.style.display = 'none';
}

pageCard.addEventListener('mouseenter', displayPage);
pageCard.addEventListener('mouseleave', removePage);

pageNav.addEventListener('mouseenter', displayPage);
pageNav.addEventListener('mouseleave', removePage);

shopCard.addEventListener('mouseenter', displayShop);
shopCard.addEventListener('mouseleave', removeShop);

shopNav.addEventListener('mouseenter', displayShop);
shopNav.addEventListener('mouseleave', removeShop);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' dot-active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' dot-active';
}
