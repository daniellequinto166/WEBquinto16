/* =========================================================
   ZAYA GRAND RESERVE
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("show");

        }
    );

}


/* =========================================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================================= */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (navigation) {

                navigation.classList.remove("show");

            }

        }
    );

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) {

        return;

    }


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedSections =
    document.querySelectorAll(
        ".story-section, " +
        ".reserve-section, " +
        ".cocktail-section, " +
        ".gallery-section, " +
        ".footer"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );


animatedSections.forEach(
    function (section) {

        observer.observe(section);

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        "© " +
        new Date().getFullYear() +
        " Zaya Grand Reserve";

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Zaya Grand Reserve website loaded successfully."
);