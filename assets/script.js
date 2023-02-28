// Dark Mode ________________________________________________________________________X
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


// Scrollreveal - Apparition au défilement __________________________________________X

ScrollReveal().reveal('.welc', { delay: 300 });
ScrollReveal().reveal('.welcSt', { delay: 300 });
ScrollReveal().reveal('.container', { delay: 300 });
ScrollReveal().reveal('.col', { delay: 300 });
ScrollReveal().reveal('.divArticle', { delay: 300 });


// Sticky Header _____________________________________________________________________X

// chopper dans le html 'leHeader'
let header = document.getElementById("leHeader");

// quand on scroll la page, cela va exéctuer 'stickyFingers'
window.onscroll = function() {
  stickyFingers()
};

// avoir la position offset de la variable header
let sticky = header.offsetTop;

// ajouter la class 'sticky' quand la limite du scroll est atteinte + l'enlève si quand on enleve la position scrollé du debut. 
function stickyFingers() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// // HAUT de page__________________________ __________________________________________X

// // chopper le bouton
// let mybutton = document.querySelector("#myBtn");

// // quand l'utilisateur descend de 20px, on display le bouton
// window.onscroll = function() {
//   scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // quand l'utilisateur clique sur le bouton, on remonte en haut de page
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

