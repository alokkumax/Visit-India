$(".hero-bottom-tab").click(function(e){
    updateDiv($(this).html());// sending as element's HTML
    updateActiveTab($(this)); // Sending as a e
    // updateImage()
})
$("img").click(function(e){
    var prev = $(".img1").attr("class");
    var clicked = $(this).attr("class");
    var order = clicked.slice(-1);;
    // console.log(prev);
    console.log(order);
    // console.log(order);

    // Inter SWAP Changer images

    // var prev = $(".img"+(order-1)).attr("class");
    // console.log(prev);

    // // order = 3
    // for(let i = order; i>1;i--){
    //     $(".img"+(i-1)).addClass("img"+i);
    //     $(".img"+(i-1)).removeClass("img"+(i-1));
    
    //     $(".img"+i).removeClass("img"+i);
    //     $(".img"+i).addClass("img"+(i-1));
    // }

    $("."+prev).addClass(clicked);
    $("."+prev).removeClass(prev);

    $(this).removeClass(clicked);
    $(this).addClass(prev);
})
function swap(a, b){

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
