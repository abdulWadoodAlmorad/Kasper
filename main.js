// start Scroll, Skills view and Count

let span=document.querySelector(".scroll");
let section=document.querySelector(".our-skills");
let spans=document.querySelectorAll(".prog span");
let nums= document.querySelectorAll(".container .box .number");
let stats=document.querySelector(".stats");
let started = false;


window.onscroll = function (){
this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
if (window.scrollY >= section.offsetTop){
    spans.forEach((span) =>     {
span.style.width=span.dataset.width    });
    };
if(window.scrollY >=stats.offsetTop ){
    if(!started){
    nums.forEach((number) => StartCount(number));
}
started=true;

}
};
function StartCount(el) {
    let goal= el.dataset.goal;
    let count= setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },3000 / goal);

}


span.onclick =function(){
    window.scrollTo({
    top : 0,
    behavior: "smooth",
    });
};



// End Scroll,Skills view and Count






