document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal1");
    let buttons = document.querySelectorAll(".go_to_checkout");
    let span = document.getElementsByClassName("close")[0];

    buttons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        };
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
