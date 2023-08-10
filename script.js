// $("div-hero") = divs;
// document.querySelectorAll(".hero-bottom-tab") = tabs;
console.log( document.querySelectorAll(".hero-bottom-tab") )

const tabs = [];

document.querySelectorAll(".hero-content").forEach((item)=>{
    // console.log(item.getAttribute("id"));
    tabs.push(item.getAttribute("id"))

})
console.log(push);

console.log("hwey")
   
$(".hero-bottom-tab").click(function(e){
        
        console.log($(this).html());

        showDiv($(this).html());
        $(this).addClass("active-bottom-tab");


        
})
function showDiv(clickedHTML){
    $("#"+clickedHTML).removeClass("hero-content");
    $("#"+clickedHTML).addClass("active-hero-content");
}
function removeActiveDiv(clickedHTML){
   

}