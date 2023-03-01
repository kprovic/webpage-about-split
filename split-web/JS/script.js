// OPEN/CLOSE NAV
function openNav() {
  document.getElementById("sidebar-on").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidebar-on").style.width = "0";
  document.getElementById("sidebar-off").style.marginLeft = "0";
}

//CLOSE MENU ON CLICK
document.addEventListener("click", function (e) {
  if (e.target.closest(".link")) {
    closeNav();
  }
});

//SCROLL ANIMATION
window.addEventListener("load", function () {
  AOS.init();
});

//DARK MODE
function switchMode() {
  document.body.classList.toggle("dark-mode");
}

//POPUP CHAT
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//ALERT
function alertFja() {
  if (document.getElementById("textbox").value == "") {
    alert("Greška!! Napiši poruku.");
  } else {
    alert("Vaša poruka je uspješno poslana!");
  }
  closeForm();
}

//PAGE LOADER
window.addEventListener("load", (event) => {
  setTimeout(function () {
    document.querySelector(".preloader").classList.add("complete");
  }, 3800);
});
