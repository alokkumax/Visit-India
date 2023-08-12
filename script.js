$(".hero-bottom-tab").click(function(e){
    updateDiv($(this).html());// sending as element's HTML
    updateActiveTab($(this)); // Sending as a e
})
$("img").click(function(e){
    var prev = $(".img1").attr("class");
    var clicked = $(this).attr("class");
    var order = clicked.slice(-1);;
    console.log(prev);
    console.log(order);
    // Inter Changer images
    $(".img1").addClass(clicked)
    $(".img1").removeClass(prev)

    $(this).removeClass(clicked);
    $(this).addClass(prev);
    //LOOP way 
    updateSlide(clicked)
})
function updateSlide(clicked){

}

function updateDiv(clickedHTML){
    var currDiv = $(".active-hero-content"); // current Active Div
    if(clickedHTML === currDiv.attr("id")){
        console.log(clickedHTML + " " + currDiv.attr("id"));
    }else{
        $("#"+clickedHTML).removeClass("hero-content");
        $("#"+clickedHTML).addClass("active-hero-content"); // adding new Div
        $("section").addClass(clickedHTML); // add img
        $("section").removeClass(currDiv.attr("id"));
        currDiv.removeClass("active-hero-content")
        currDiv.addClass("hero-content"); // removing prev Div
        currDiv = $(".active-hero-content").attr("id"); // Updating new DIV
    }
}
function updateActiveTab(clickedTab){
    var currTab = $(".active-bottom-tab"); // current Active Tab
    if(clickedTab.html() === currTab.html()){
        console.log(clickedTab.html() + " " + currTab.html());
    }else{
        $(clickedTab).removeClass("hero-bottom-tab");
        $(clickedTab).addClass("active-bottom-tab"); // adding new tab
        currTab.removeClass("active-bottom-tab");
        currTab.addClass("hero-bottom-tab"); // removing prev tab
        currTab = $(".active-bottom-tab").html(); // updating new Tab
    }
}
