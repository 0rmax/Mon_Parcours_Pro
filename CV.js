let déroulement = document.querySelectorAll(".déroulement");

déroulement.forEach(acc => {
    acc.addEventListener("click", function() {

        let détails = this.nextElementSibling;

        if(détails.style.display === "block"){
            détails.style.display = "none";
        } else {
            détails.style.display = "block";
        }

    });
});