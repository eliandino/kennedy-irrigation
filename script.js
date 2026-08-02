/*====================================================
  Kennedy Irrigation
  script.js
  Part 1
====================================================*/

"use strict";

/*====================================================
  DOM ELEMENTS
====================================================*/

const loader = document.getElementById("loader");

const header = document.getElementById("header");

const hamburger = document.getElementById("hamburger");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const backToTop = document.getElementById("backToTop");


/*====================================================
  LOADER
====================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 900);

});


/*====================================================
  STICKY HEADER
====================================================*/

function updateHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/*====================================================
  MOBILE MENU
====================================================*/

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    hamburger.classList.toggle("active");

});


/*====================================================
  CLOSE MENU WHEN LINK CLICKED
====================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    });

});


/*====================================================
  SMOOTH SCROLL
====================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetID = this.getAttribute("href");

        if (!targetID.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(targetID);

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 85,

            behavior: "smooth"

        });

    });

});


/*====================================================
  BACK TO TOP BUTTON
====================================================*/

function toggleBackButton() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", toggleBackButton);

toggleBackButton();


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*====================================================
  ACTIVE NAV LINK
====================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================================
  SMALL HERO PARALLAX
====================================================*/

const heroBackground = document.querySelector(".hero-background");

window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    const offset = window.scrollY * 0.35;

    heroBackground.style.transform = `scale(1.08) translateY(${offset}px)`;

});


/*====================================================
  WINDOW RESIZE
====================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    }

});

/*====================================================
  Kennedy Irrigation
  script.js
  Part 2
====================================================*/

"use strict";

/*====================================================
  ANIMATED COUNTERS
====================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 120));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                clearInterval(timer);

            } else {

                counter.textContent = current;

            }

        }, 18);

        observer.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*====================================================
  SCROLL REVEAL
====================================================*/

const revealItems = document.querySelectorAll(
`
.service-card,
.about-image,
.about-content,
.stat-box,
.why-card,
.gallery-item,
.review-card,
.comparison-card,
.contact-info,
.contact-form
`
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

    });

}, {

    threshold: .15

});

revealItems.forEach(item => {

    item.classList.add("fade-in");

    revealObserver.observe(item);

});


/*====================================================
  SERVICE CARD HOVER
====================================================*/

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*====================================================
  LIGHTBOX
====================================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


lightbox.addEventListener("click", () => {

    lightbox.classList.add("hidden");

    document.body.style.overflow = "";

});


document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.classList.add("hidden");

        document.body.style.overflow = "";

    }

});


/*====================================================
  CONTACT FORM
====================================================*/

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs = form.querySelectorAll("input[required]");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.borderColor = "#ef4444";

                valid = false;

            } else {

                input.style.borderColor = "";

            }

        });

        if (!valid) {

            alert("Please complete the required fields.");

            return;

        }

        alert(
            "Thank you! Your request has been received. We'll contact you shortly."
        );

        form.reset();

    });

}


/*====================================================
  BUTTON RIPPLE EFFECT
====================================================*/

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.btn-call,.btn-emergency"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "10px";

        ripple.style.height = "10px";

        ripple.style.borderRadius = "50%";

        ripple.style.background = "rgba(255,255,255,.5)";

        ripple.style.pointerEvents = "none";

        ripple.style.left =
            (e.offsetX - 5) + "px";

        ripple.style.top =
            (e.offsetY - 5) + "px";

        ripple.style.transform = "scale(0)";

        ripple.style.transition = ".6s";

        this.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.transform = "scale(35)";

            ripple.style.opacity = "0";

        });

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});


/*====================================================
  FLOATING BUTTON PULSE
====================================================*/

const floatingButtons = document.querySelectorAll(

".floating-call,.floating-facebook"

);

setInterval(() => {

    floatingButtons.forEach(button => {

        button.animate(

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

        });

    });

},7000);


/*====================================================
  LAZY LOADING IMAGES
====================================================*/

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";

        imageObserver.unobserve(entry.target);

    });

});

lazyImages.forEach(image => {

    image.style.opacity = ".2";

    image.style.transition = ".8s";

    imageObserver.observe(image);

});


/*====================================================
  HERO CARD FLOAT
====================================================*/

const heroCard = document.querySelector(".hero-card");

if(heroCard){

setInterval(()=>{

heroCard.animate(

[

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],

{

duration:2500

});

},2600);

}

/*====================================================
  Kennedy Irrigation
  script.js
  Part 3
====================================================*/

"use strict";

/*====================================================
  SCROLL PROGRESS BAR
====================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background =
"linear-gradient(90deg,#1e88e5,#00c853)";
progressBar.style.zIndex = "99999";
progressBar.style.transition = "width .15s linear";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent = (scrollTop / pageHeight) * 100;

    progressBar.style.width = percent + "%";

});


/*====================================================
  TYPEWRITER EFFECT
====================================================*/

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const originalText = heroTitle.textContent.trim();

    heroTitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {

            heroTitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 28);

        }

    }

    setTimeout(typeWriter, 700);

}


/*====================================================
  MOUSE PARALLAX
====================================================*/

const hero = document.querySelector(".hero");

const heroCard = document.querySelector(".hero-card");

if (hero && heroCard) {

    hero.addEventListener("mousemove", (e) => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 35;

        const y =
            (window.innerHeight / 2 - e.clientY) / 35;

        heroCard.style.transform =
            `translate(${x}px,${y}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroCard.style.transform = "";

    });

}


/*====================================================
  AUTO TESTIMONIAL HIGHLIGHT
====================================================*/

const reviews =
document.querySelectorAll(".review-card");

let reviewIndex = 0;

if (reviews.length) {

    setInterval(() => {

        reviews.forEach(card => {

            card.style.transform = "";
            card.style.boxShadow = "";

        });

        reviews[reviewIndex].style.transform =
            "scale(1.04)";

        reviews[reviewIndex].style.boxShadow =
            "0 20px 40px rgba(0,0,0,.18)";

        reviewIndex++;

        if (reviewIndex >= reviews.length) {

            reviewIndex = 0;

        }

    }, 3500);

}


/*====================================================
  WATER PARTICLES
====================================================*/

const heroOverlay =
document.querySelector(".hero-overlay");

if (heroOverlay) {

    for (let i = 0; i < 25; i++) {

        const drop = document.createElement("div");

        drop.style.position = "absolute";
        drop.style.width = "6px";
        drop.style.height = "6px";
        drop.style.borderRadius = "50%";
        drop.style.background =
            "rgba(255,255,255,.35)";

        drop.style.left =
            Math.random() * 100 + "%";

        drop.style.top =
            Math.random() * 100 + "%";

        drop.style.animation =
            `floatDrop ${5 + Math.random() * 5}s linear infinite`;

        heroOverlay.appendChild(drop);

    }

}


/*====================================================
  CREATE PARTICLE ANIMATION
====================================================*/

const particleStyle =
document.createElement("style");

particleStyle.textContent = `

@keyframes floatDrop{

0%{

transform:translateY(0);

opacity:0;

}

30%{

opacity:.6;

}

100%{

transform:translateY(-120px);

opacity:0;

}

}

`;

document.head.appendChild(particleStyle);


/*====================================================
  BEFORE / AFTER IMAGE
====================================================*/

const comparisonImage =
document.querySelector(".comparison-image img");

if (comparisonImage) {

    comparisonImage.addEventListener("mouseenter", () => {

        comparisonImage.style.transform =
            "scale(1.05)";

        comparisonImage.style.transition =
            ".5s";

    });

    comparisonImage.addEventListener("mouseleave", () => {

        comparisonImage.style.transform =
            "scale(1)";

    });

}


/*====================================================
  IMAGE HOVER ZOOM
====================================================*/

document.querySelectorAll(".gallery-item img")

.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter =
            "brightness(1.05) saturate(1.15)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter = "";

    });

});


/*====================================================
  PRELOAD HERO IMAGE
====================================================*/

const preloadImage = new Image();

preloadImage.src = "images/hero.jpg";


/*====================================================
  PERFORMANCE
====================================================*/

window.addEventListener("pageshow", () => {

    console.log(
        "Kennedy Irrigation Website Ready"
    );

});


/*====================================================
  DEVELOPER CREDIT
====================================================*/

console.log(`

==============================================

Kennedy Irrigation & Landscape Lighting

Designed by Eli Andino

Powered by HTML • CSS • JavaScript

==============================================

`);

