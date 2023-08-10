console.log(document.querySelectorAll(".hero-content"));
console.log(document.querySelectorAll(".hero-content"));

$(".hero-bottom-tab").click(function(e){
        console.log($(this).html());
        updateDiv($(this).html());
        updateActiveTab($(this))
})
function updateDiv(clickedHTML){
    var currDiv = $(".active-hero-content");
console.log(currDiv)

var currTab = $(".active-bottom-tab");
console.log(currTab)

    $("#"+clickedHTML).removeClass("hero-content");
    $("#"+clickedHTML).addClass("active-hero-content");

    currDiv.removeClass("active-hero-content")
    currDiv.addClass("hero-content")

    console.log("prev div "+currDiv.attr("id"))


    currDiv = $(".active-hero-content").attr("id");
    console.log("new div "+currDiv)


}
function updateActiveTab(clickedTab){
    var currDiv = $(".active-hero-content");
    console.log(currDiv)
    
    var currTab = $(".active-bottom-tab");
    console.log(currTab)

    $(clickedTab).removeClass("hero-bottom-tab");
    $(clickedTab).addClass("active-bottom-tab");

    currTab.removeClass("active-bottom-tab")
    currTab.addClass("hero-bottom-tab")

    console.log("prev div "+currTab.html())


    currTab = $(".active-bottom-tab").html();
        console.log("new tab "+currTab)
        return currTab;

}