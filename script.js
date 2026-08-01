/* ==================================================
   Kennedy Irrigation & Landscape Lighting
   script.js
   Part 1
================================================== */

"use strict";

/* ==========================================
   Smooth Scroll Navigation
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/* ==========================================
   Sticky Navigation Shadow
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.15)";
        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.88)";

    }

});


/* ==========================================
   Reveal Sections While Scrolling
========================================== */

const revealItems = document.querySelectorAll(

".service-card, .gallery-item, .review-card, .about, .why-us"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});


/* ==========================================
   Hero Fade
========================================== */

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});


/* ==========================================
   Floating Call Button Bounce
========================================== */

const floatingButton=document.querySelector(".floating-call");

if(floatingButton){

floatingButton.addEventListener("mouseenter",()=>{

floatingButton.style.transform="scale(1.15) rotate(8deg)";

});

floatingButton.addEventListener("mouseleave",()=>{

floatingButton.style.transform="scale(1) rotate(0deg)";

});

}


/* ==========================================
   Active Navigation Highlight
========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/* ==========================================
   Simple Hero Button Animation
========================================== */

const heroButtons=document.querySelectorAll(

".primary-btn, .secondary-btn"

);

heroButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


/* ==========================================
   Console Welcome Message
========================================== */

console.log(
"%cKennedy Irrigation & Landscape Lighting",
"color:#0B7A3B;font-size:18px;font-weight:bold;"
);

console.log(
"Website initialized successfully."
);

/* ==================================================
   Kennedy Irrigation & Landscape Lighting
   script.js
   Part 2
================================================== */


/* ==========================================
   Animated Counters
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.dataset.target);

let current = 0;

const speed = target / 120;

const updateCounter = ()=>{

current += speed;

if(current < target){

counter.textContent = Math.floor(current);

requestAnimationFrame(updateCounter);

}else{

counter.textContent = target.toLocaleString()+"+";

}

};

updateCounter();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   Gallery Click Effect
========================================== */

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`

<div class="lightbox-content">

<img src="${img.src}" alt="Gallery">

</div>

`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});


/* ==========================================
   Auto Rotating Testimonials
========================================== */

const reviewCards=document.querySelectorAll(".review-card");

let reviewIndex=0;

if(reviewCards.length){

setInterval(()=>{

reviewCards.forEach(card=>{

card.style.opacity=".35";

card.style.transform="scale(.95)";

});

reviewCards[reviewIndex].style.opacity="1";

reviewCards[reviewIndex].style.transform="scale(1)";

reviewIndex++;

if(reviewIndex>=reviewCards.length){

reviewIndex=0;

}

},3500);

}


/* ==========================================
   Hero Parallax
========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

const scroll=window.pageYOffset;

hero.style.backgroundPositionY=scroll*.45+"px";

});


/* ==========================================
   Floating Leaves
========================================== */

function createLeaf(){

const leaf=document.createElement("div");

leaf.className="leaf";

leaf.innerHTML="🍃";

leaf.style.left=Math.random()*100+"vw";

leaf.style.animationDuration=(6+Math.random()*6)+"s";

leaf.style.fontSize=(16+Math.random()*18)+"px";

document.body.appendChild(leaf);

setTimeout(()=>{

leaf.remove();

},12000);

}

setInterval(createLeaf,2500);


/* ==========================================
   Random Welcome Message
========================================== */

const messages=[

"Healthy lawns begin with healthy irrigation.",

"Keeping Northeast Florida beautiful.",

"Need sprinkler repair? We're here to help.",

"Professional landscape lighting installed with care.",

"Your lawn deserves the best."

];

const heroText=document.querySelector(".hero p");

if(heroText){

setInterval(()=>{

heroText.style.opacity=0;

setTimeout(()=>{

heroText.textContent=

messages[Math.floor(Math.random()*messages.length)];

heroText.style.opacity=1;

},400);

},7000);

}


/* ==========================================
   Image Hover Tilt
========================================== */

document.querySelectorAll(".gallery-item").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((y/rect.height)-0.5)*-10;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});


console.log("Part 2 Loaded Successfully");
