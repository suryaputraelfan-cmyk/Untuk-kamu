const startButton =
    document.getElementById("startButton");

const content =
    document.getElementById("content");

const music =
    document.getElementById("music");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const answerText =
    document.getElementById("answerText");


/* =========================================
   OPENING + MUSIK
========================================= */

startButton.addEventListener(
    "click",
    function () {

        content.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });


        startButton.textContent =
            "Sudah dibuka 💗";


        function mulaiMusik() {

            music.currentTime =
                74;

            music.play().catch(
                function () {

                    answerText.textContent =
                        "Tekan ▶️ di lagu kalau belum mulai ya 💗";

                }
            );

        }


        if (music.readyState >= 1) {

            mulaiMusik();

        } else {

            music.addEventListener(
                "loadedmetadata",
                mulaiMusik,
                {
                    once: true
                }
            );

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold:
                0.15
        }

    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* =========================================
   TOMBOL IYA
========================================= */

yesButton.addEventListener(
    "click",
    function () {

        answerText.textContent =
            "AAAAA 😭💗 akhirnya... aku seneng banget.";

        yesButton.textContent =
            "💗 YEAY 💗";

        yesButton.style.transform =
            "scale(1.15)";


        /* HUJAN HATI */

        hujanHati();

    }
);


/* =========================================
   TOMBOL NANTI DULU
========================================= */

function tombolKabur() {

    const jarakX =
        Math.floor(
            Math.random() * 401
        ) - 200;


    const jarakY =
        Math.floor(
            Math.random() * 201
        ) - 100;


    noButton.style.position =
        "relative";


    noButton.style.left =
        jarakX + "px";


    noButton.style.top =
        jarakY + "px";


    answerText.textContent =
        "Hehehe 😝 tombolnya kabur dulu...";

}


noButton.addEventListener(
    "mouseenter",
    tombolKabur
);


noButton.addEventListener(
    "mouseover",
    tombolKabur
);


noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        tombolKabur();

    },
    {
        passive:
            false
    }
);


noButton.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        tombolKabur();

    }
);


/* =========================================
   HUJAN HATI
========================================= */

const heartContainer =
    document.getElementById(
        "heartContainer"
    );


function hujanHati() {

    const jumlahHati =
        35;


    for (
        let i = 0;
        i < jumlahHati;
        i++
    ) {

        setTimeout(
            function () {

                const heart =
                    document.createElement(
                        "span"
                    );


                heart.className =
                    "flying-heart";


                const bentukHati = [

                    "💗",
                    "💕",
                    "💖",
                    "💓",
                    "💞",
                    "❤️"

                ];


                heart.textContent =
                    bentukHati[
                        Math.floor(
                            Math.random()
                            *
                            bentukHati.length
                        )
                    ];


                heart.style.left =
                    Math.random()
                    * 100
                    + "%";


                heart.style.fontSize =
                    (
                        16 +
                        Math.random()
                        * 25
                    )
                    + "px";


                heart.style.animationDuration =
                    (
                        3 +
                        Math.random()
                        * 3
                    )
                    + "s";


                heartContainer.appendChild(
                    heart
                );


                setTimeout(
                    function () {

                        heart.remove();

                    },
                    6500
                );


            },
            i * 70
        );

    }

}


/* =========================================
   FULLSCREEN FOTO
========================================= */

const photoViewer =
    document.getElementById(
        "photoViewer"
    );


const viewerImage =
    document.getElementById(
        "viewerImage"
    );


const closePhoto =
    document.getElementById(
        "closePhoto"
    );


const photos =
    document.querySelectorAll(
        ".photo-card img"
    );


photos.forEach(
    function (photo) {

        photo.addEventListener(
            "click",
            function () {

                viewerImage.src =
                    photo.src;

                photoViewer.classList.add(
                    "active"
                );

            }
        );

    }
);


/* TUTUP FOTO */

closePhoto.addEventListener(
    "click",
    function () {

        photoViewer.classList.remove(
            "active"
        );

    }
);


/* KLIK AREA GELAP UNTUK TUTUP */

photoViewer.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            photoViewer
        ) {

            photoViewer.classList.remove(
                "active"
            );

        }

    }
);


/* ESC UNTUK TUTUP */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            photoViewer.classList.remove(
                "active"
            );

        }

    }
);