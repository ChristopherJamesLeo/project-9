console.log("hello world");


let navBarSlideBtn = document.getElementById("navBar-slide-btn");

let slideScroll = (left , right , index1 , index2 , leftani , rightani , scrollAmount)=>{
    let leftSlide = document.getElementsByClassName(left)[index1];
    let rightSlide = document.getElementsByClassName(right)[index2];
    leftSlide.classList.toggle(leftani , window.scrollY > scrollAmount);
    rightSlide.classList.toggle (rightani , window.scrollY > scrollAmount)
}
let windowScroll = (second , third , fourth , fifth ,six , seven , eight , nine , scrollTop)=>{
    window.addEventListener("scroll" , e=()=>{
        // second 
        slideScroll("second-banner-left-img","second-banner-right-container",0,0,"second-banner-left-img-anni","second-banner-right-container-anni",second)
    })
    window.addEventListener("scroll" , e=()=>{
        // third 
        slideScroll("third-banner-first-role","third-banner-second-role",0,0,"third-banner-first-role-anni","third-banner-second-role-anni",third)
    })
    window.addEventListener("scroll" , e=()=>{
        // fourth 
        slideScroll("fourth-banner-left-item","fourth-banner-right-item",0,0,"fourth-banner-left-item-ani","fourth-banner-right-item-ani",fourth)
    })
    window.addEventListener("scroll" , e=()=>{
        // fifth 
        slideScroll("fith-banner-left-top","fith-banner-right-top-container",0,0,"fith-banner-left-top-ani","fith-banner-right-top-container-ani",fifth)
        slideScroll("fith-banner-left-botttom-container","fith-banner-right-botton",0,0,"fith-banner-left-botttom-container-ani","fith-banner-right-botton-ani",fifth)
    })
    window.addEventListener("scroll" , e=()=>{
        // six 
        slideScroll("six-banner-detail-container-first","six-banner-detail-container-third",0,0,"six-banner-detail-container-first-ani","six-banner-detail-container-third-ani",six)
        slideScroll("six-banner-detail-container-first","six-banner-detail-container-third",0,0,"six-banner-detail-container-first-ani","six-banner-detail-container-third-ani",six)
    })
    // window.addEventListener("scroll" , e=()=>{
        
    // })
    window.addEventListener("scroll" , e=()=>{
        // seven 
        slideScroll("seven-banner-body-items-first","seven-banner-body-items-third",0,0,"seven-banner-body-items-first-ani","seven-banner-body-items-third-ani",seven)
        slideScroll("seven-banner-body-items-second","seven-banner-body-items-fourth",0,0,"seven-banner-body-items-second-ani","seven-banner-body-items-fourth-ani",seven)
    })
    window.addEventListener("scroll" , e=()=>{
        // eight 
        let showslide = document.getElementsByClassName("eight-banner-right-img-container")[0];
        showslide.classList.toggle("eight-banner-right-img-container-ani" , window.scrollY > eight)
    })
    window.addEventListener("scroll" , e=()=>{
        // nine 
        let showslide = document.getElementsByClassName("nine-banner-container")[0];
        showslide.classList.toggle("nine-banner-container-ani" , window.scrollY > nine)
    })
    window.addEventListener("scroll" , e=()=>{
        let sliderToTop = document.getElementById("returnbtn");
        sliderToTop.classList.toggle("returnbtn-show" , window.scrollY > scrollTop)
    })
}

let scrollValue = ()=>{
    let body = document.documentElement.clientWidth;
    let scrollPos = document.documentElement.scrollTop;
    console.log(scrollPos)
    if ( body > 1000) {
        windowScroll (450 , 1500 , 2500 ,3000 , 4200 , 5000 ,5900 , 6600 , 6500);
    } else if (body < 1000 && body > 800) {
        windowScroll (600 , 1700 , 3200 ,4000 , 4800 , 6400 ,7600 , 8500 , 8500);
    } else if (body < 800 && body > 600) {
        windowScroll (500 , 2100 , 4400 ,5100 , 7600 , 9200 ,11100 , 11900 ,11800);
    } else if (body < 600 && body > 400) {
        windowScroll (500 , 1700 , 4000 ,4600 , 6400 , 7900 ,10300 , 10800 , 12);
    };

}

window.onscroll = scrollValue ;
window.onload = scrollValue;

let slideBtn = document.getElementById("returnbtn");
slideBtn.addEventListener("click" , e=()=>{
    window.scrollTo({
        top:0,
        behavior : "smooth",
    })
})
let menuslider = document.getElementById("menubtn");
menuslider.addEventListener("click" , e=()=>{
    let mainSlide = document.getElementsByClassName("slide-container")[0];
    mainSlide.classList.toggle("slide-container-slider");
})

$(document).ready(e=()=>{
    $("#navBar-slide-btn").click (e=()=>{
        $(".nav-slider-ul").animate({
            width:"toggle",
        });
    })
});
