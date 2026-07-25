// ===============================
// ❤️ LOVE COUNTER
// ===============================

const counter = document.getElementById("counter");

if (counter) {

    const startDate = new Date("2021-04-27");

    function updateCounter() {

        const today = new Date();

        let years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();
        let days = today.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        counter.innerHTML =
            `${years} Years ❤️<br>${months} Months ❤️<br>${days} Days`;

    }

    updateCounter();

}



// ===============================
// ❤️ SCROLL REVEAL
// ===============================

const memories = document.querySelectorAll(".memory");

function revealMemories() {

    memories.forEach(memory => {

        const top = memory.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            memory.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealMemories);

revealMemories();



// ===============================
// ❤️ CHAPTER 2 PHOTO SLIDER
// ===============================

const photos = [

    "images/closer.jpeg",
    "images/closer1.jpeg",
    "images/closer2.jpeg",
    "images/closer3.jpeg",
    "images/closer4.jpeg",
    "images/closer5.jpeg"

];

const captions = [

    "This was one of the first moments where we were becoming more than just two people who had met at a birthday. ❤️",

    "Every conversation with you made me smile a little more.",

    "Some memories don't need perfect poses. They just remind me how happy I was with you.",

    "Looking back at this photo, I realize my heart had already chosen you.",

    "Every little moment with you slowly became my favourite part of the day.",

    "Who knew these simple memories would become some of the most precious ones in my life? ❤️"

];

let currentPhoto = 0;

const sliderImage = document.getElementById("sliderImage");
const photoCaption = document.getElementById("photoCaption");
const nextPhoto = document.getElementById("nextPhoto");

if (sliderImage && photoCaption && nextPhoto) {

    nextPhoto.addEventListener("click", function () {

        sliderImage.classList.add("fade-out");

        setTimeout(function () {

            currentPhoto++;

            if (currentPhoto >= photos.length) {
                currentPhoto = 0;
            }

            sliderImage.src = photos[currentPhoto];
            photoCaption.innerHTML = captions[currentPhoto];

            sliderImage.classList.remove("fade-out");

        }, 300);

    });

}
// ===============================
// ❤️ CHAPTER 3 - PROPOSAL
// ===============================

const proposalButton = document.getElementById("showProposal");
const proposalSection = document.getElementById("proposalSection");

if (proposalButton && proposalSection) {

    proposalButton.addEventListener("click", function () {

        proposalSection.style.display = "block";
        proposalButton.style.display = "none";

        proposalSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}



// ===============================
// ❤️ WHY I LOVE YOU
// ===============================

const reasons = [

    "You care for me like no one else. ❤️",

    "You always make me laugh.",

    "You treat me like your princess.",

    "You support every dream I have.",

    "You believe in us.",

    "I love your smile.",

    "I love the way your eyes light up when you're happy.",

    "You're never afraid to show your love.",

    "You trust me completely.",

    "Because life simply feels better with you in it. ❤️"

];

let currentReason = 0;

const loveButton = document.getElementById("loveButton");
const loveReasons = document.getElementById("loveReasons");
const reasonText = document.getElementById("reasonText");

if (loveButton && loveReasons && reasonText) {

    loveButton.addEventListener("click", function () {

        loveReasons.style.display = "block";

        reasonText.innerHTML = reasons[currentReason];

        currentReason++;

        if (currentReason >= reasons.length) {

            loveButton.innerHTML = "❤️ That's Why I'll Always Choose You";
            loveButton.disabled = true;

        }

    });

}



// ===============================
// ❤️ BIRTHDAY LETTER
// ===============================

const giftButton = document.getElementById("giftButton");
const birthdayLetter = document.getElementById("birthdayLetter");

if (giftButton && birthdayLetter) {

    giftButton.addEventListener("click", function () {

        birthdayLetter.style.display = "block";
        giftButton.style.display = "none";

        if (typeof confetti === "function") {

            confetti({
                particleCount: 180,
                spread: 100,
                origin: { y: 0.6 }
            });

        }

        birthdayLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}



// ===============================
// ❤️ SECRET MESSAGE
// ===============================

console.log("%cHappy Birthday, Bipal! ❤️",
"color:#ff4f81;font-size:22px;font-weight:bold;");

console.log("I knew you'd inspect the code. 😄");
console.log("Relationship Status: ❤️ Connected");
console.log("Errors Found: 0");
console.log("Future Together: Infinity ♾️");
console.log("Love, Janvi ❤️");
// ===============================
// ❤️ SCROLL PROGRESS BAR
// ===============================

const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    window.addEventListener("scroll", function () {

        const winScroll =
            document.documentElement.scrollTop || document.body.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        progressBar.style.width = scrolled + "%";

    });

}



// ===============================
// ❤️ BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



// ===============================
// ❤️ PAGE LOADED
// ===============================

window.addEventListener("load", function () {

    revealMemories();

    console.log("Website Loaded Successfully ❤️");

});
const finalPopup = document.getElementById("finalPopup");
const closePopup = document.getElementById("closePopup");

if (finalPopup && closePopup) {

    window.addEventListener("scroll", function () {

        if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 10
        ) {
            finalPopup.style.display = "flex";
        }

    });

    closePopup.addEventListener("click", function () {

        finalPopup.style.display = "none";

    });

}