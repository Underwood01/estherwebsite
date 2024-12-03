document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    let isDragging = false;
    let startPos = 0;
    let currentPos = 0;
    let initialPos = 0;
    let velocity = 0;
    let animationFrame;
    let lastTime = Date.now();

    const startDragging = (position) => {
        isDragging = true;
        startPos = position;
        initialPos = currentPos;
        slider.style.animation = 'none';
        cancelAnimationFrame(animationFrame);
        lastTime = Date.now();
    };

    const stopDragging = () => {
        if (isDragging) {
            isDragging = false;
            const timeElapsed = (Date.now() - lastTime) / 1000;
            velocity = (currentPos - initialPos) / timeElapsed;
            animateSlider();
        }
    };

    const animateSlider = () => {
        if (!isDragging) {
            currentPos += velocity * 0.05;
            slider.style.transform = `perspective(1200px) rotateX(-16deg) rotateY(${currentPos}deg)`;
            velocity *= 0.95; // Dampen the velocity over time
            if (Math.abs(velocity) > 0.1) {
                animationFrame = requestAnimationFrame(animateSlider);
            } else {
                slider.style.animation = 'autoRun 60s linear infinite';
            }
        }
    };

    const onDrag = (position) => {
        if (isDragging) {
            currentPos = initialPos + (position - startPos);
            slider.style.transform = `perspective(1200px) rotateX(-16deg) rotateY(${currentPos}deg)`;
        }
    };

    slider.addEventListener('mousedown', (e) => startDragging(e.clientX));
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mousemove', (e) => onDrag(e.clientX));
    slider.addEventListener('mouseleave', stopDragging);

    slider.addEventListener('touchstart', (e) => startDragging(e.touches[0].clientX));
    slider.addEventListener('touchend', stopDragging);
    slider.addEventListener('touchmove', (e) => onDrag(e.touches[0].clientX));
});
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
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const images = [
        'house1.jpg',
        'house2.jpg',
        'house3.jpg',
        'house4.jpg',
        'house5.jpg',
        'house6.jpg',
        'house7.jpg',
        'house8.jpg'
    ];

    slider.style.setProperty('--quantity', images.length);

    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.style.setProperty('--position', index + 1);
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `House ${index + 1}`;

        item.appendChild(img);
        slider.appendChild(item);
    });
});
