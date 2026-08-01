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
