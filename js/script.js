let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;
    slides[slideIndex].classList.add("ativo");
}

function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

mostrarSlide(0);
setInterval(() => mudarSlide(1), 5000);

function mostrarCuriosidade() {
    const texto = document.getElementById("textoCuriosidade");
    if (texto.textContent === "") {
        texto.textContent = "Curiosidade: O primeiro Grande Prêmio de Fórmula 1 foi realizado em 1950, em Silverstone, na Inglaterra.";
        texto.style.color = "#e63946";
    } else {
        texto.textContent = "";
    }
}