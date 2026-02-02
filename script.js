document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("bookBtn");

    if (!btn) {
        alert("Book button not found. ID 'bookBtn' missing in HTML.");
        return;
    }

    btn.addEventListener("click", function () {

        const name = document.getElementById("name")?.value.trim();
        const date = document.getElementById("date")?.value;
        const city = document.getElementById("city")?.value.trim();
        const service = document.getElementById("service")?.value;

        if (!name || !date || !city || !service) {
            alert("Fill all details before booking.");
            return;
        }

        const phone = "919352046191";   // Riya's WhatsApp

        const text =
            "Hello Royal Mehendi Studio,%0A%0A" +
            "I want to book Mehendi.%0A%0A" +
            "Name: " + name + "%0A" +
            "Service: " + service + "%0A" +
            "Date: " + date + "%0A" +
            "City: " + city + "%0A%0A" +
            "Please confirm.";

        const url = "https://wa.me/" + phone + "?text=" + text;

        window.open(url, "_blank");
    });

});
