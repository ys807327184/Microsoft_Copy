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

//search button
var header_search_button = document.getElementById("header-search-button");
var header_nav = document.getElementById("header-nav");
var header_shopping_cart = document.getElementById("header-shopping-cart");
var header_account = document.getElementById("header-account");
var search_bar_cancel = document.getElementById("search-bar-cancel");
var search_bar = document.getElementById("search-bar");
var search_bar_search = document.getElementById("search-bar-search");

header_search_button.onclick = function() {
  if (screen.width > 859) {
    header_nav.style.display = "none";
    header_collapse.style.display = "none";
    header_shopping_cart.style.display = "none";
    header_account.style.display = "none";
    header_search_button.style.display = "none";
    search_bar.style.display = "inline-block";
    search_bar_cancel.style.display = "inline-block";
    search_bar_search.style.display = "inline-block";
    search_bar.focus();
  }
}

search_bar_cancel.onclick = function() {
  header_nav.style.display = "inline-block";
  header_collapse.style.display = "inline-block";
  header_shopping_cart.style.display = "inline-block";
  header_account.style.display = "inline-block";
  header_search_button.style.display = "inline-block";
  search_bar.style.display = "none";
  search_bar_cancel.style.display = "none";
  search_bar_search.style.display = "none";
}