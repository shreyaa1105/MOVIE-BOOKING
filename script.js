// Book Now Button
document.getElementById("bookNow").addEventListener("click", function () {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
});

// Book Ticket Buttons
const bookButtons = document.querySelectorAll(".bookBtn");

bookButtons.forEach(button => {

    button.addEventListener("click", function () {

        const movieName =
            this.parentElement.querySelector("h3").innerText;

        document.getElementById("movie").value = movieName;

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("popup").style.display = "flex";

});

// Close Popup
function closePopup() {

    document.getElementById("popup").style.display = "none";

}
