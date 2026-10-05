/* =========================================================
   WEDDING INVITATION JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCREEN ELEMENTS
       ===================================================== */

    const introScreen =
        document.getElementById("introScreen");

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const acceptButton =
        document.getElementById("acceptButton");


    let invitationOpened = false;


    /* =====================================================
       OPEN INVITATION
       ===================================================== */

    function openInvitation() {

        if (invitationOpened) {
            return;
        }


        invitationOpened = true;


        /* Disable button */

        if (acceptButton) {
            acceptButton.disabled = true;
        }


        /* Zoom intro screen out */

        if (introScreen) {
            introScreen.classList.add("exit");
        }


        /* Bring welcome screen in */

        setTimeout(function () {

            if (welcomeScreen) {
                welcomeScreen.classList.add("active");
            }

        }, 450);

    }


    /* =====================================================
       ACCEPT BUTTON
       ===================================================== */

    if (acceptButton) {

        acceptButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                openInvitation();

            }
        );

    }


    /* =====================================================
       TAP ANYWHERE ON INTRO SCREEN
       ===================================================== */

    if (introScreen) {

        introScreen.addEventListener(
            "click",
            function (event) {

                /*
                 If the button was clicked,
                 don't run this twice.
                */

                if (
                    event.target.closest(
                        "#acceptButton"
                    )
                ) {
                    return;
                }


                openInvitation();

            }
        );

    }


    /* =====================================================
       WEDDING DETAILS
       ===================================================== */

    const weddingDetails = {

        date: "26 January 2026",

        venue: "Delhi",

        time: "7:00 PM"

    };


    /* Get all three buttons */

    const detailButtons =
        document.querySelectorAll(".detail");


    /* =====================================================
       DETAIL CLICK
       ===================================================== */

    detailButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                /*
                 If already revealed,
                 leave it revealed.
                */

                if (
                    button.classList.contains(
                        "revealed"
                    )
                ) {
                    return;
                }


                /* Get which button was clicked */

                const type =
                    button.getAttribute(
                        "data-detail"
                    );


                /* Get actual value */

                const value =
                    weddingDetails[type];


                /* Find text elements */

                const valueElement =
                    button.querySelector(
                        ".detail-value"
                    );

                const hintElement =
                    button.querySelector(
                        ".detail-hint"
                    );


                /* Safety check */

                if (
                    !valueElement ||
                    !value
                ) {

                    console.error(
                        "Wedding detail not found:",
                        type
                    );

                    return;

                }


                /* =========================================
                   REVEAL VALUE
                   ========================================= */

                valueElement.textContent =
                    value;


                /* =========================================
                   MARK AS REVEALED
                   ========================================= */

                button.classList.add(
                    "revealed"
                );


                /* =========================================
                   CHANGE HINT
                   ========================================= */

                if (hintElement) {

                    hintElement.textContent =
                        "REVEALED";

                }


                /* =========================================
                   ANIMATION
                   ========================================= */

                button.classList.add(
                    "reveal-animation"
                );


                setTimeout(function () {

                    button.classList.remove(
                        "reveal-animation"
                    );

                }, 700);

            }
        );

    });

});