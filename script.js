/* ===================================
   TYPING EFFECT
=================================== */

const typingText = document.getElementById("typing-text");

const words = [
    "Student",
    "Anime Fan",
    "God of War Gamer",
    "Future Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();



/* ===================================
   DYNAMIC HOBBIES
=================================== */

const hobbies = [

    {
        icon: "fa-solid fa-gamepad",
        title: "Gaming",
        description:
            "Playing the God of War series on PlayStation is my favorite pastime."
    },

    {
        icon: "fa-solid fa-book",
        title: "Studying",
        description:
            "Learning programming and improving my knowledge every day."
    },

    {
        icon: "fa-solid fa-tv",
        title: "Watching Anime",
        description:
            "Watching anime helps me relax after studying."
    },

    {
        icon: "fa-solid fa-laptop-code",
        title: "Coding",
        description:
            "Building websites and learning JavaScript."
    }

];

const hobbyContainer =
    document.getElementById("hobbies-container");

hobbies.forEach(hobby => {

    hobbyContainer.innerHTML += `

        <div class="hobby-card">

            <i class="${hobby.icon}"></i>

            <h3>${hobby.title}</h3>

            <p>${hobby.description}</p>

        </div>

    `;

});



/* ===================================
   BACK TO TOP BUTTON
=================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ===================================
   ACTIVE NAVIGATION
=================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */

const revealElements =
    document.querySelectorAll(

        ".about-card, .hobby-card, .contact-box, .hero-text, .hero-image"

    );

function reveal() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();



/* ===================================
   RANDOM BACKGROUND GLOW
=================================== */

const colors = [

    "#ff4040",
    "#ff0000",
    "#ff5555",
    "#aa0000"

];

setInterval(() => {

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.boxShadow =
        `inset 0 0 120px ${randomColor}`;

}, 2500);



/* ===================================
   HERO BUTTON EFFECT
=================================== */

const button =
    document.querySelector(".btn");

button.addEventListener("mouseover", () => {

    button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseout", () => {

    button.style.transform = "scale(1)";

});



/* ===================================
   HERO IMAGE ROTATION
=================================== */

const image =
    document.querySelector(".image-frame");

let angle = 0;

setInterval(() => {

    angle += 0.4;

    image.style.transform =
        `rotate(${Math.sin(angle) * 2}deg)`;

}, 40);



/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log("================================");

console.log("Portfolio Successfully Loaded");

console.log("Developer: Lyrel Betuin");

console.log("Made using HTML CSS JavaScript");

console.log("================================");