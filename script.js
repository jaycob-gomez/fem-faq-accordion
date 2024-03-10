const content = document.getElementsByClassName("content");
var i;

for (i = 0; i < content.length; i++) {
  content[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var paragraph = this.nextElementSibling;
    if (paragraph.style.display === "block") {
      paragraph.style.display = "none";
    } else {
      paragraph.style.display = "block";
    }
  });
}
