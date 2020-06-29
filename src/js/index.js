const modal = document.querySelector(".modal");
const previous = document.querySelectorAll(".gallery img");
const original = document.querySelector(".fluid-img");
const caption = document.querySelector(".caption");

previous.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = preview.getAttribute("data-original");
        original.src = `../img/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener("click", (e) => {
if(e.target.classList.contains("modal")){
    modal.classList.remove("open");
    original.classList.remove("open");
}
})