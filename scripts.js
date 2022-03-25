//header-collapse expand
var header_collapse_button = document.getElementById("header-collapse-button");
var header_collapse_expand = document.getElementById("header-collapse-expand");
var header_collapse_button_chevron_up = document.getElementById("header-collapse-button-chevron-up");
var header_collapse_button_chevron_down = document.getElementById("header-collapse-button-chevron-down");
var header_collapse = document.getElementById("header-collapse");

header_collapse_button.onclick = function() {
  if (header_collapse_expand.style.display == "none") {
    header_collapse_expand.style.display = "unset";
    header_collapse_button_chevron_down.style.display = "none";
    header_collapse_button_chevron_up.style.display = "unset";
    header_collapse.style.backgroundColor = "#f2f2f2";
  } else {
    header_collapse_expand.style.display = "none";
    header_collapse_button_chevron_down.style.display = "unset";
    header_collapse_button_chevron_up.style.display = "none";
    header_collapse.style.backgroundColor = "unset";
  }
}

//more button
var button_more = document.getElementById("button-more");
var button_more_chevron_down = document.getElementById("button-more-chevron-down");
var button_more_chevron_up = document.getElementById("button-more-chevron-up");
var button_more_expand = document.getElementById("button-more-expand");
var button_xbox = document.getElementById("button-xbox");
var button_xbox_expand = document.getElementById("button-xbox-expand");

button_more.onclick = function() {
  if (button_more_expand.style.display == "none") {

    button_more.style.backgroundColor = "#f2f2f2";
    button_more_chevron_down.style.display = "none";
    button_more_chevron_up.style.display = "unset";
    button_more_expand.style.display = "block";
  
    if (screen.width < 894){

      button_xbox_expand.style.display = "block";

    }
  

  } else {

    button_more.style.backgroundColor = "#fff";
    button_more_chevron_down.style.display = "unset";
    button_more_chevron_up.style.display = "none";
    button_xbox_expand.style.display = "none";
    button_more_expand.style.display = "none";

  }
}