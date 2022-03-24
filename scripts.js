//header-collapse expand
var header_collapse_button = document.getElementById("header-collapse-button");
var header_collapse_expand = document.getElementById("header-collapse-expand");

header_collapse_button.onclick = function() {
  if (header_collapse_expand.style.display == "none") {
    header_collapse_expand.style.display = "unset";
  } else {
    header_collapse_expand.style.display = "none";
  }
}