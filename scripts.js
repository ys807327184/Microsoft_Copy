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
var search_bar_cancel_sm = document.getElementById("search-bar-cancel-sm");
var search_bar_search_sm = document.getElementById("search-bar-search-sm");
var search_bar_sm_container = document.getElementById("search-bar-sm-container");

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
  } else {
    search_bar_cancel_sm.style.display = "inline-block";
    search_bar_search_sm.style.display = "inline-block";
    search_bar_sm_container.style.display = "inline-block";
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

search_bar_cancel_sm.onclick = function() {
  search_bar_cancel_sm.style.display = "none";
  search_bar_search_sm.style.display = "none";
  search_bar_sm_container.style.display = "none";
}

//header list
var header_list = document.getElementById("header-list");
var header_list_expand = document.getElementById("header-list-expand");
var list_expand = document.getElementById("list-expand");
var list_close = document.getElementById("list-close");

header_list.onclick = function() {
  if (header_list_expand.style.display != "inline-block") {
    list_expand.style.display = "none";
    list_close.style.display = "unset";
    header_list_expand.style.display = "inline-block";
  } else {
    list_expand.style.display = "unset";
    list_close.style.display = "none";
    header_list_expand.style.display = "none";
  }
}

var expandable1 = document.getElementById("expandable1");
var expanded1 = document.getElementById("expanded1");

expandable1.onclick = function() {
  if (expandable1.children[1].classList.contains("display-visible")) {
    expandable1.children[1].classList.remove("display-visible");
    expandable1.children[1].classList.add("display-hide");
    expandable1.children[2].classList.remove("display-hide");
    expandable1.children[2].classList.add("display-visible");
    expanded1.classList.remove("display-hide");
    expanded1.classList.add("display-visible");
  } else {
    expandable1.children[1].classList.remove("display-hide");
    expandable1.children[1].classList.add("display-visible");
    expandable1.children[2].classList.remove("display-visible");
    expandable1.children[2].classList.add("display-hide");
    expanded1.classList.remove("display-visible");
    expanded1.classList.add("display-hide");
  }
}

var expandable2 = document.getElementById("expandable2");
var expanded2 = document.getElementById("expanded2");

expandable2.onclick = function() {
  if (expandable2.children[1].classList.contains("display-visible")) {
    expandable2.children[1].classList.remove("display-visible");
    expandable2.children[1].classList.add("display-hide");
    expandable2.children[2].classList.remove("display-hide");
    expandable2.children[2].classList.add("display-visible");
    expanded2.classList.remove("display-hide");
    expanded2.classList.add("display-visible");
  } else {
    expandable2.children[1].classList.remove("display-hide");
    expandable2.children[1].classList.add("display-visible");
    expandable2.children[2].classList.remove("display-visible");
    expandable2.children[2].classList.add("display-hide");
    expanded2.classList.remove("display-visible");
    expanded2.classList.add("display-hide");
  }
}

var expandable3 = document.getElementById("expandable3");
var expanded3 = document.getElementById("expanded3");

expandable3.onclick = function() {
  if (expandable3.children[1].classList.contains("display-visible")) {
    expandable3.children[1].classList.remove("display-visible");
    expandable3.children[1].classList.add("display-hide");
    expandable3.children[2].classList.remove("display-hide");
    expandable3.children[2].classList.add("display-visible");
    expanded3.classList.remove("display-hide");
    expanded3.classList.add("display-visible");
  } else {
    expandable3.children[1].classList.remove("display-hide");
    expandable3.children[1].classList.add("display-visible");
    expandable3.children[2].classList.remove("display-visible");
    expandable3.children[2].classList.add("display-hide");
    expanded3.classList.remove("display-visible");
    expanded3.classList.add("display-hide");
  }
}

var expandable4 = document.getElementById("expandable4");
var expanded4 = document.getElementById("expanded4");

expandable4.onclick = function() {
  if (expandable4.children[1].classList.contains("display-visible")) {
    expandable4.children[1].classList.remove("display-visible");
    expandable4.children[1].classList.add("display-hide");
    expandable4.children[2].classList.remove("display-hide");
    expandable4.children[2].classList.add("display-visible");
    expanded4.classList.remove("display-hide");
    expanded4.classList.add("display-visible");
  } else {
    expandable4.children[1].classList.remove("display-hide");
    expandable4.children[1].classList.add("display-visible");
    expandable4.children[2].classList.remove("display-visible");
    expandable4.children[2].classList.add("display-hide");
    expanded4.classList.remove("display-visible");
    expanded4.classList.add("display-hide");
  }
}

var expandable5 = document.getElementById("expandable5");
var expanded5 = document.getElementById("expanded5");

expandable5.onclick = function() {
  if (expandable5.children[1].classList.contains("display-visible")) {
    expandable5.children[1].classList.remove("display-visible");
    expandable5.children[1].classList.add("display-hide");
    expandable5.children[2].classList.remove("display-hide");
    expandable5.children[2].classList.add("display-visible");
    expanded5.classList.remove("display-hide");
    expanded5.classList.add("display-visible");
  } else {
    expandable5.children[1].classList.remove("display-hide");
    expandable5.children[1].classList.add("display-visible");
    expandable5.children[2].classList.remove("display-visible");
    expandable5.children[2].classList.add("display-hide");
    expanded5.classList.remove("display-visible");
    expanded5.classList.add("display-hide");
  }
}

var expandable6 = document.getElementById("expandable6");
var expanded6 = document.getElementById("expanded6");

expandable6.onclick = function() {
  if (expandable6.children[1].classList.contains("display-visible")) {
    expandable6.children[1].classList.remove("display-visible");
    expandable6.children[1].classList.add("display-hide");
    expandable6.children[2].classList.remove("display-hide");
    expandable6.children[2].classList.add("display-visible");
    expanded6.classList.remove("display-hide");
    expanded6.classList.add("display-visible");
  } else {
    expandable6.children[1].classList.remove("display-hide");
    expandable6.children[1].classList.add("display-visible");
    expandable6.children[2].classList.remove("display-visible");
    expandable6.children[2].classList.add("display-hide");
    expanded6.classList.remove("display-visible");
    expanded6.classList.add("display-hide");
  }
}