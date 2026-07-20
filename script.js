document.addEventListener("DOMContentLoaded", function () {

    const navigateBtn = document.getElementById("navigateBtn");

    if (navigateBtn) {

        navigateBtn.addEventListener("click", function () {

            const current = document.getElementById("currentLocation").value;
            const destination = document.getElementById("destination").value;

            let message = "";

            if (current === destination) {
                message = "✅ You are already at " + destination + ".";
            } else {
                message =
                "📍 Start from " + current +
                "<br><br>➡ Follow the main road towards " +
                destination +
                ".<br><br>✅ You have arrived at " + destination + ".";
            }

            document.getElementById("routeResult").innerHTML =
                "<h3>Navigation Instructions</h3><p>" + message + "</p>";

        });

    }

});
