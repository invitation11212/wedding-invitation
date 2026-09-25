const openButton = document.getElementById("openButton");
const coverScreen = document.getElementById("coverScreen");
const detailsScreen = document.getElementById("detailsScreen");


// =================================
// فتح الدعوة والانتقال للشاشة الثانية
// =================================

openButton.addEventListener("click", function () {

    coverScreen.classList.add("hide");

    setTimeout(function () {

        detailsScreen.classList.add("show");

        detailsScreen.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);

});


// =================================
// العد التنازلي
// =================================

const weddingDate =
    new Date("2026-11-13T17:30:00+03:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

   const secondsElement = document.getElementById("seconds");

secondsElement.textContent =
    String(seconds).padStart(2, "0");

secondsElement.classList.remove("tick");

// إعادة تشغيل الحركة في كل ثانية
void secondsElement.offsetWidth;

secondsElement.classList.add("tick");
}


updateCountdown();

setInterval(updateCountdown, 1000);