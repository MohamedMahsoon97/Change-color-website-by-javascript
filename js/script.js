// get some elements from html 
var chanColor = document.getElementById("changeColor");
var panelContent = document.getElementById("panel-content");
var closePanelContent = document.getElementById("panel-btn");

// this function to open Panel tooltip
function openPanel() {
    panelContent.style.display = ("block");
};
// this function to close Panel tooltip
function closePanel() {
    panelContent.style.display = ("none");
};

// to get Navbar Element by querySelector
var navbarFixed = document.querySelector(".header .navbar");

// this function to make Navbar Fixed when (Y >= 300px) 
window.onscroll = function() {
    if (window.pageYOffset >= 300) {
        navbarFixed.classList.add('navbar-fixed');
        // navbarFixed.style.position = "fixed";
        // navbarFixed.style.backgroundColor = "#4868db";
        // navbarFixed.style.borderRadius = "100px";
        // navbarFixed.style.width = "90%";
        // navbarFixed.style.marginLeft = "5%";
    } else if (window.pageYOffset == 0) {
        navbarFixed.classList.remove('navbar-fixed');
    }
}

// add default local storage class on body
document.body.classList.add(localStorage.getItem("pageColor") || "skyBlue");

var item = document.querySelectorAll(".panel-accent-color li .color-backface");  // select elements
var classesList = [];  // Array Empty

// Loop on colors
for (var i = 0; i < item.length; i++) {
    classesList.push(item[i].getAttribute('data-color'));  // get to all classes

    item[i].addEventListener("click", function(){
        document.body.classList.remove(...classesList);   // Remove all classes
        document.body.classList.add(this.getAttribute('data-color'));   // Add all classes

        localStorage.setItem("pageColor" , this.getAttribute('data-color'));   // Add data to Local Storage
    }, false
    );
}



