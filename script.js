/*==================================================
  Kennedy Irrigation
  Modern Script v2.0
  Part 1
==================================================*/

"use strict";

/*==================================================
  DOM CACHE
==================================================*/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const loader = $("#loader");
const header = $("#header");
const navMenu = $(".nav-menu");
const hamburger = $("#hamburger");
const backToTop = $("#backToTop");
const heroBackground = $(".hero-background");
const progressBar = document.createElement("div");

const navLinks = [...$$(".nav-menu a")];
const sections = [...$$("section")];


/*==================================================
  SCROLL PROGRESS BAR
==================================================*/

progressBar.id = "scroll-progress";

Object.assign(progressBar.style, {

    position: "fixed",
    top: "0",
    left: "0",
    width: "0%",
    height: "4px",
    zIndex: "99999",
    background:
        "linear-gradient(90deg,#1e88e5,#00c853)",
    transition: "width .15s linear"

});

document.body.appendChild(progressBar);


/*==================================================
  LOADER
==================================================*/

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 700);

});


/*==================================================
  MOBILE MENU
==================================================*/

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

}


/*==================================================
  NAVIGATION LINKS
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        const href = link.getAttribute("href");

        if (!href.startsWith("#")) return;

        e.preventDefault();

        const target = $(href);

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 85,

            behavior: "smooth"

        });

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    });

});


/*==================================================
  BACK TO TOP
==================================================*/

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==================================================
  ONE SCROLL LISTENER
==================================================*/

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    /*-------------------------
      Sticky Header
    -------------------------*/

    header.classList.toggle(

        "scrolled",

        scroll > 60

    );


    /*-------------------------
      Progress Bar
    -------------------------*/

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progressBar.style.width =
        (scroll / maxScroll) * 100 + "%";


    /*-------------------------
      Back To Top
    -------------------------*/

    if (backToTop) {

        backToTop.classList.toggle(

            "show",

            scroll > 450

        );

    }


    /*-------------------------
      Hero Parallax
    -------------------------*/

    if (heroBackground) {

        heroBackground.style.transform =

        `scale(1.08) translateY(${scroll * .25}px)`;

    }


    /*-------------------------
      Active Navigation
    -------------------------*/

    let current = "";

    sections.forEach(section => {

        if (

            scroll >=

            section.offsetTop - 140

        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(

            "active",

            link.getAttribute("href") === "#" + current

        );

    });

});


/*==================================================
  WINDOW RESIZE
==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    }

});


/*==================================================
  HELPER FUNCTIONS
==================================================*/

function animate(element, keyframes, options) {

    if (!element) return;

    element.animate(

        keyframes,

        options

    );

}


function inViewport(element) {

    const rect = element.getBoundingClientRect();

    return (

        rect.top <

        window.innerHeight * .85

    );

}

console.log(

"%cKennedy Irrigation v2.0 Loaded",

"color:#1e88e5;font-size:16px;font-weight:bold"

);

/*==================================================
  Kennedy Irrigation
  Modern Script v2.0
  Part 2
==================================================*/


/*==================================================
  SCROLL REVEAL
==================================================*/

const revealItems = [

    ...$$(".service-card"),
    ...$$(".about-image"),
    ...$$(".about-content"),
    ...$$(".stat-box"),
    ...$$(".why-card"),
    ...$$(".gallery-item"),
    ...$$(".review-card"),
    ...$$(".comparison-card"),
    ...$$(".contact-info"),
    ...$$(".contact-form")

];

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

    });

},{

    threshold:.15

});

revealItems.forEach(item=>{

    item.classList.add("fade-in");

    revealObserver.observe(item);

});


/*==================================================
  COUNTERS
==================================================*/

const counters = $$(".counter");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.dataset.target);

let value = 0;

const speed = Math.max(1,target/80);

const timer = setInterval(()=>{

value += speed;

if(value >= target){

counter.textContent = target;

clearInterval(timer);

}else{

counter.textContent = Math.floor(value);

}

},20);

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==================================================
  GALLERY LIGHTBOX
==================================================*/

const lightbox = $("#lightbox");

const lightboxImage = $("#lightbox-image");

$$(".gallery-item img").forEach(image=>{

image.addEventListener("click",()=>{

lightboxImage.src = image.src;

lightbox.classList.remove("hidden");

document.body.style.overflow="hidden";

});

});

if(lightbox){

lightbox.addEventListener("click",()=>{

lightbox.classList.add("hidden");

document.body.style.overflow="";

});

}

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

lightbox.classList.add("hidden");

document.body.style.overflow="";

}

});


/*==================================================
  HERO CARD FLOAT
==================================================*/

const heroCard = $(".hero-card");

if(heroCard){

setInterval(()=>{

animate(

heroCard,

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:2400

}

);

},2600);

}


/*==================================================
  MOUSE PARALLAX
==================================================*/

const hero = $(".hero");

if(hero && heroCard){

hero.addEventListener("mousemove",e=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

heroCard.style.transform=

`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

heroCard.style.transform="";

});

}


/*==================================================
  IMAGE FADE-IN
==================================================*/

const images = $$("img");

const imageObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

imageObserver.unobserve(entry.target);

});

});

images.forEach(image=>{

image.style.opacity=".15";

image.style.transform="scale(.97)";

image.style.transition=".7s ease";

imageObserver.observe(image);

});


/*==================================================
  GALLERY HOVER
==================================================*/

$$(".gallery-item img").forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.filter=

"brightness(1.05) saturate(1.15)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter="";

});

});


/*==================================================
  SERVICE CARD TILT
==================================================*/

$$(".service-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY =

((x/rect.width)-0.5)*12;

const rotateX =

((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/*==================================================
  BUTTON RIPPLE
==================================================*/

$$(".btn-primary,.btn-secondary,.btn-call,.btn-emergency")

.forEach(button=>{

button.style.position="relative";

button.style.overflow="hidden";

button.addEventListener("click",e=>{

const ripple=document.createElement("span");

Object.assign(ripple.style,{

position:"absolute",

left:e.offsetX+"px",

top:e.offsetY+"px",

width:"10px",

height:"10px",

borderRadius:"50%",

background:"rgba(255,255,255,.45)",

transform:"translate(-50%,-50%) scale(0)",

transition:".6s",

pointerEvents:"none"

});

button.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform=

"translate(-50%,-50%) scale(30)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==================================================
  Kennedy Irrigation
  Modern Script v2.0
  Part 3
==================================================*/


/*==================================================
  CONTACT FORM
==================================================*/

const contactForm = $(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",e=>{

e.preventDefault();

const required =
contactForm.querySelectorAll("[required]");

let valid = true;

required.forEach(field=>{

field.style.borderColor="";

if(!field.value.trim()){

field.style.borderColor="#ef4444";

valid=false;

}

});

if(!valid){

alert("Please complete all required fields.");

return;

}

alert("Thank you! We'll contact you soon.");

contactForm.reset();

});

}


/*==================================================
  FLOATING BUTTON PULSE
==================================================*/

const floatingButtons = [

$(".floating-call"),

$(".floating-facebook")

].filter(Boolean);

setInterval(()=>{

floatingButtons.forEach(button=>{

animate(

button,

[

{

transform:"scale(1)"

},

{

transform:"scale(1.12)"

},

{

transform:"scale(1)"

}

],

{

duration:900

}

);

});

},6000);


/*==================================================
  REVIEW SPOTLIGHT
==================================================*/

const reviews = [...$$(".review-card")];

let reviewIndex = 0;

if(reviews.length){

setInterval(()=>{

reviews.forEach(card=>{

card.classList.remove("active-review");

});

reviews[reviewIndex].classList.add("active-review");

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

},3500);

}


/*==================================================
  WATER PARTICLES
==================================================*/

const overlay = $(".hero-overlay");

if(overlay){

const style = document.createElement("style");

style.textContent = `

.water-drop{

position:absolute;

width:6px;

height:6px;

border-radius:50%;

background:rgba(255,255,255,.35);

animation:waterFloat linear infinite;

pointer-events:none;

}

@keyframes waterFloat{

0%{

transform:translateY(40px);

opacity:0;

}

20%{

opacity:.7;

}

100%{

transform:translateY(-140px);

opacity:0;

}

}

`;

document.head.appendChild(style);

for(let i=0;i<18;i++){

const drop=document.createElement("div");

drop.className="water-drop";

drop.style.left=Math.random()*100+"%";

drop.style.top=Math.random()*100+"%";

drop.style.animationDuration=

4+Math.random()*5+"s";

drop.style.animationDelay=

Math.random()*5+"s";

overlay.appendChild(drop);

}

}


/*==================================================
  IMAGE PRELOAD
==================================================*/

[

"images/hero.jpg",

"images/about.jpg",

"images/project1.jpg"

].forEach(src=>{

const img=new Image();

img.src=src;

});


/*==================================================
  PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

console.log(

"✔ Assets Loaded"

);

});


/*==================================================
  OPTIONAL EASTER EGG
==================================================*/

let logoClicks=0;

const logo=$(".logo");

if(logo){

logo.addEventListener("click",()=>{

logoClicks++;

if(logoClicks===7){

alert(

"💧 Kennedy Irrigation\nBuilt with ❤️ by Eli Andino"

);

logoClicks=0;

}

});

}


/*==================================================
  DEVELOPER BANNER
==================================================*/

console.log(`

╔══════════════════════════════════════╗
║                                      ║
║   Kennedy Irrigation Website v2.0    ║
║                                      ║
║   Developed by Eli Andino            ║
║   HTML • CSS • JavaScript            ║
║                                      ║
╚══════════════════════════════════════╝

`);


/*==================================================
  WEBSITE INITIALIZER
==================================================*/

function initializeSite(){

console.log("Initialization Complete");

}

initializeSite();
