function navigateToNextPage() {
    window.location.href = "newpage.html";
}
document.addEventListener("DOMContentLoaded", () => {
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }
});
}, {
threshold: 0.1
});

elements.forEach(element => {
observer.observe(element);
});
});
