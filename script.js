const tgll = document.querySelectorAll(".faq-toggle");

tgll.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle("active");
    });
});