// Header

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  //document.getElementById("header").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("header").style.marginLeft= "0";
}
// Header
// Smooth Scroll without showing # in the Url

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Remove .html from html linkes to index.html

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (!this.href.endsWith(".html")) {
      e.preventDefault();
      window.location.href = this.href + ".html";
    }
  });
});
