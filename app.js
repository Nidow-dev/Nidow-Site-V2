// Récupère les éléments du DOM
const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Initialise les variables
let slideIndex = 0;
let slideWidth = slides.firstElementChild.offsetWidth;
let slidesLength = slides.children.length;

// Affiche la première partie du carrousel
slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

// Ajoute les écouteurs d'événements aux boutons de navigation
prev.addEventListener('click', function() {
  slideIndex = (slideIndex - 1 + slidesLength) % slidesLength;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

next.addEventListener('click', function() {
  slideIndex = (slideIndex + 1) % slidesLength;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

// Fonction de défilement automatique
function autoScroll() {
  // Incrémente l'index de la partie affichée
  slideIndex = (slideIndex + 1) % slidesLength;

  // Déplace les parties pour afficher la partie suivante
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Défile le carrousel toutes les 3 secondes
setInterval(autoScroll, 3000);
