document.addEventListener("DOMContentLoaded", () => {
    let burger = document.querySelector(".burger-icon");
    let navlinks = document.querySelector(".nav-links");

    burger.addEventListener('click', () => {
        navlinks.classList.toggle("nav-show");
    });
});


// function openNav() {
//    document.getElementById("mySidebar").style.width = "180px";
//    document.getElementById("main");
//   }
  
//   function closeNav() {
//    document.getElementById("mySidebar").style.width = "0";
//    document.getElementById("main");
//    
//   }
