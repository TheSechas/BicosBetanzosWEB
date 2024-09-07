let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
});

function updateSlider() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
