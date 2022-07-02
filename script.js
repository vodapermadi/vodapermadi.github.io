const html = document.querySelector("html");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function () {
    toggle.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark");
});