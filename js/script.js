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
