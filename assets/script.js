/* Menu Burger _____________*/ 

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}


/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/* Fin _____________*/ 

/*  XXXXXXXXXXXXXXXXXXXXX TEST Graph XXXXXXXXXXXXXXXXXXXXXX  */

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
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Apparition au défilement _____________________________________________X

ScrollReveal().reveal('.welc', { delay: 300 });
ScrollReveal().reveal('.welcSt', { delay: 300 });
ScrollReveal().reveal('.container', { delay: 300 });
ScrollReveal().reveal('.col', { delay: 300 });
ScrollReveal().reveal('.divArticle', { delay: 300 });