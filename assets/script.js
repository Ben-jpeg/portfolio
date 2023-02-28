/* Graph XXXXXXXXXXXXXXXXXXXXXX  */

function makeGraph(container, labels)
{
    container = document.getElementById(container);
    labels = document.getElementById(labels)
    var dnl = container.getElementsByTagName("li");
    for(var i = 0; i < dnl.length; i++)
    {
        var item = dnl.item(i);
        var value = item.innerHTML;
        var color = item.style.background=color;
        var content = value.split(":");
        value = content[0];
        item.style.height=value + "px";
        item.style.top=(199 - value) + "px";
        item.style.left = (i * 50 + 20) + "px";
        item.style.height = value + "px";
        item.innerHTML = value;
        item.style.visibility="visible";	
        color = content[2];
        if(color != false) item.style.background=color;
        labels.innerHTML = labels.innerHTML +
             "<span style='margin:8px;background:"+ color+"'>" + 
             content[1] + "</span>";
    }	
}


window.onload=function () { makeGraph("graph", "labels") }

/*  XXXXXXXXXXXXXXXXXXXXX Fin graph XXXXXXXXXXXXXXXXXXXXXX  */



// Dark Mode _____________________________________________X
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

// Scrollreveal - Apparition au défilement ____________________________X

ScrollReveal().reveal('.welc', { delay: 300 });
ScrollReveal().reveal('.welcSt', { delay: 300 });
ScrollReveal().reveal('.container', { delay: 300 });
ScrollReveal().reveal('.col', { delay: 300 });
ScrollReveal().reveal('.divArticle', { delay: 300 });

// Sticky Header _______________________________________________________X

// quand on scroll la page, cela va exéctuer 'stickyFingers'
window.onscroll = function() {stickyFingers()};

// chopper dans le html 'leHeader'
var header = document.getElementById("leHeader");

// avoir la position offset de la variable header
var sticky = header.offsetTop;

// ajouter la class 'sticky' quand la limite du scroll est atteinte + l'enlève si quand on enleve la position scrollé du debut. 
function stickyFingers() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
