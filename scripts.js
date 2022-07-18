//header-collapse expand
var header_collapse_expand = document.getElementById("header-collapse-expand");
var header_collapse_button_chevron_up = document.getElementById("header-collapse-button-chevron-up");
var header_collapse_button_chevron_down = document.getElementById("header-collapse-button-chevron-down");
var header_collapse = document.getElementById("header-collapse");

//more button
var button_more = document.getElementById("button-more");
var button_more_chevron_down = document.getElementById("button-more-chevron-down");
var button_more_chevron_up = document.getElementById("button-more-chevron-up");
var button_more_expand = document.getElementById("button-more-expand");
var button_xbox = document.getElementById("button-xbox");
var button_xbox_expand = document.getElementById("button-xbox-expand");

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
var search_bar_sm = document.getElementById("search-bar-sm");
var header_search = document.getElementById("header-search");
var sb_container = document.getElementById("sb-container");

//header list
var header_list_expand = document.getElementById("header-list-expand");
var list_expand = document.getElementById("list-expand");
var list_close = document.getElementById("list-close");

let expandables = [document.getElementById("expandable1"), document.getElementById("expandable2"), document.getElementById("expandable3"), document.getElementById("expandable4"), document.getElementById("expandable5"), document.getElementById("expandable6")];
let expandeds = [document.getElementById("expanded1"), document.getElementById("expanded2"), document.getElementById("expanded3"), document.getElementById("expanded4"), document.getElementById("expanded5"), document.getElementById("expanded6")];

//horizontal scroll button
const wrapper = document.querySelector(".main-row-1");
const max_scroll = wrapper.scrollWidth;
let scrollMovePoint = 0;
function scrollX(direction) {
  let operand = 500;
  if (direction == 'right') {
    if (scrollMovePoint < max_scroll) {
      scrollMovePoint += operand;
    }
  } else if (direction == 'left') {
    if (scrollMovePoint > 0) {
      scrollMovePoint -= operand;
    }
  }
  wrapper.scroll(scrollMovePoint, 0);
}

function headerCollapseExpand() {
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

function moreButton() {
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

function headerSearchButton() {
  header_search.style.display = "none";
  header_nav.style.display = "none";
  header_collapse.style.display = "none";
  header_shopping_cart.style.display = "none";
  header_account.style.display = "none";
  header_search_button.style.display = "none";
  search_bar.style.display = "inline-block";
  search_bar_cancel.style.display = "inline-block";
  search_bar_search.style.display = "inline-block";
  sb_container.style.display = "inline-block";
  search_bar.focus();
}

function headerSbSm() {
  search_bar_cancel_sm.style.display = "inline-block";
  search_bar_search_sm.style.display = "inline-block";
  search_bar_sm_container.style.display = "inline-block";
  search_bar_sm.focus();
}

function searchBarCancel() {
  header_nav.style.display = "inline-block";
  header_collapse.style.display = "inline-block";
  header_shopping_cart.style.display = "inline-block";
  header_account.style.display = "inline-block";
  header_search_button.style.display = "inline-block";
  search_bar.style.display = "none";
  search_bar_cancel.style.display = "none";
  search_bar_search.style.display = "none";
  sb_container.style.display = "none";
  header_search.style.display = "inline-block";
}

function searchBarCancelSm() {
  search_bar_cancel_sm.style.display = "none";
  search_bar_search_sm.style.display = "none";
  search_bar_sm_container.style.display = "none";
}

function headerList() {
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

function expandable(i) {
  if (expandables[i].children[1].classList.contains("display-visible")) {
    expandables[i].children[1].classList.remove("display-visible");
    expandables[i].children[1].classList.add("display-hide");
    expandables[i].children[2].classList.remove("display-hide");
    expandables[i].children[2].classList.add("display-visible");
    expandeds[i].classList.remove("display-hide");
    expandeds[i].classList.add("display-visible");
  } else {
    expandables[i].children[1].classList.remove("display-hide");
    expandables[i].children[1].classList.add("display-visible");
    expandables[i].children[2].classList.remove("display-visible");
    expandables[i].children[2].classList.add("display-hide");
    expandeds[i].classList.remove("display-visible");
    expandeds[i].classList.add("display-hide");
  }
}