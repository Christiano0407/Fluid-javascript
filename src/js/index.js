const modal = document.querySelector(".modal");
const previous = document.querySelectorAll(".gallery img");
const original = document.querySelector(".fluid-img");
const imgText = document.querySelector(".caption");

previous.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
    });
});