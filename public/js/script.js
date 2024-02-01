// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//tax-switch-toggle
let searchBtn = document.getElementById("search-btn");

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxinfo = document.getElementsByClassName("tax-info");
  for (let info of taxinfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

// Client-side JavaScript
document.querySelectorAll(".fa-solid").forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    const areaType =
      option.parentNode.parentNode.querySelector("p").textContent;
    console.log(areaType);

    fetch(`/searchOptions?placeType=${areaType}`);
    window.location.href = `/searchOptions?placeType=${areaType}`;
  });
});
