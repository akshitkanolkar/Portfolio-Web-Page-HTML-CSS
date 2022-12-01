// on click show hide menu
let menuToggle = document.getElementById("menu-toggle");

// on click of hambuger icon call the function toggleMenu
menuToggle.addEventListener("click", toggleMenu);

function toggleMenu(){
  // toggle class change to hamburger element
  document.getElementById("menu-toggle").classList.toggle("change");

  let navbar = document.querySelector(".navbar-collapse");
  setTimeout(() => {
    // show hide navbar
    if (menuToggle.classList.contains('change')) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }, 500);

}
