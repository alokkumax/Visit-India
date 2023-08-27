$(".hero-bottom-tab").click(function (e) {
  updateDiv($(this).html()); // sending as element's HTML
  updateActiveTab($(this)); // Sending as a e
});
$("img").click(function (e) {
  var prev = $(".img1").attr("class");
  var clicked = $(this).attr("class");
  var clickedName = $(this).attr("id");
  console.log(clickedName);

  var order = clicked.slice(-1);
  console.log(order);
  $("." + prev).addClass(clicked);
  $("." + prev).removeClass(prev);
  $(this).removeClass(clicked);
  $(this).addClass(prev);
  updateDiv(clickedName);
  updateActiveTab(clickedName);
});

function updateDiv(clickedHTML) {
  var currDiv = $(".active-hero-content"); // current Active Div
  if (clickedHTML === currDiv.attr("id")) {
    console.log(clickedHTML + " " + currDiv.attr("id"));
  } else {
    $("#" + clickedHTML).removeClass("hero-content");
    $("#" + clickedHTML).addClass("active-hero-content"); // adding new Div
    $("section").addClass(clickedHTML); // add img
    $("section").removeClass(currDiv.attr("id"));
    currDiv.removeClass("active-hero-content");
    currDiv.addClass("hero-content"); // removing prev Div
    currDiv = $(".active-hero-content").attr("id"); // Updating new DIV
  }
}
function updateActiveTab(clickedTab) {
  var currTab = $(".active-bottom-tab"); // current Active Tab
  if (clickedTab.html() === currTab.html()) {
    console.log(clickedTab.html() + " " + currTab.html());
  } else {
    $(clickedTab).removeClass("hero-bottom-tab");
    $(clickedTab).addClass("active-bottom-tab"); // adding new tab
    currTab.removeClass("active-bottom-tab");
    currTab.addClass("hero-bottom-tab"); // removing prev tab
    currTab = $(".active-bottom-tab").html(); // updating new Tab
  }
}

// NAV TAB
$(".nav-tab").click(function (e) {
  console.log($(this).attr("id"));
  if (
    $("#item" + $(this).attr("id")).hasClass("active-nav")
  ) {
    $("#item" + $(this).attr("id")).removeClass("active-nav");
    $(this).removeClass();
  }
  else {
    updateNavMenu($(this).attr("id"));
    updateNavTitle($(this).attr("id"));
  }
});
function updateNavMenu(selectedNav) {
  $("#item" + 1).removeClass("active-nav");
  $("#item" + 2).removeClass("active-nav");
  $("#item" + 3).removeClass("active-nav");
  
  // if($("#item" + 1).hasClass("active-nav")){
  //   $("#item" + 1).removeClass("active-nav");
  // }else if(
  //   $("#item" + 2).removeClass("active-nav")
  // ){
  //   $("#item" + 2).removeClass("active-nav");
  // }else if( $("#item" + 3).removeClass("active-nav")){
  //   $("#item" + 3).removeClass("active-nav");
  // }

  $("#item" + selectedNav)
    .addClass("active-nav");
}
function updateNavTitle(selectedNavTitle) {
  var clickedId = selectedNavTitle.slice(-1);
  $("#" + 1).removeClass();
  $("#" + 2).removeClass();
  $("#" + 3).removeClass();
  $("#" + clickedId).addClass("active-tab" + clickedId);
}
function toggleMenu(){
  $("#subMenu").toggleClass("open-menu");
}
