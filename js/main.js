// $(document).ready(function() {

//     $("body").fadeIn(2000);

// 	$("a.main__link--one").click(function(event){
// 		event.preventDefault();
// 		linkLocation = this.href;
// 		$(".main__header, .main__content,  .main__footer").fadeOut(1000);
// 	});
// });

new WOW().init();

const humbergerMenuLink = document.querySelector(".main__link");
const humbergerMenuLinkTwo = document.querySelector(".main__link--one");
const sectionMain = document.querySelector(".main");
const sectionMenu = document.querySelector(".main--menu");

humbergerMenuLink.addEventListener( "click" , function() {
    sectionMain.style.transform = "translateY(-100%)";
    sectionMenu.style.transform = "translateY(0)";
});


humbergerMenuLinkTwo.addEventListener( "click" , function() {
    sectionMain.style.transform = "translateY(0)";
    sectionMenu.style.transform = "translateY(-100%)";
});


// const bg = document.querySelector(".main");

// const random = (min = 0, max = 1) => Math.floor(Math.random() * (max - min)) + min;

// bg.addEventListener("mousemove",e=>{
//     const {pageX, pageY} = e;
//     bg.innerHTML  = `x:${pageX} y:${pageY}`;
//     const randomBg = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)} )`
//     bg.style.backgroundColor = randomBg;
// });