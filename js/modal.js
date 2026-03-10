const modal = document.getElementById('imageModal');
let currentImage = null;

function openModal(imgElement) {
    const modalImg = document.getElementById('modalImage');

    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;

    document.querySelector('.modal-info h2').textContent    = imgElement.dataset.title;
    document.getElementById('modalMedium').textContent      = imgElement.dataset.medium;
    document.getElementById('modalSize').textContent        = imgElement.dataset.size;

    modal.style.display = 'flex';
    currentImage = imgElement;
}

function closeModal() {
    modal.style.display = 'none';
}

function navigateImages(direction) {
    if (!currentImage) return;

    const images = document.querySelectorAll('.gallery img');
    const currentIndex = Array.from(images).indexOf(currentImage);
    let newIndex = (currentIndex + direction + images.length) % images.length;

    openModal(images[newIndex]);
}

// Close on backdrop click
modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft')  navigateImages(-1);
        if (e.key === 'ArrowRight') navigateImages(1);
        if (e.key === 'Escape')     closeModal();
    }
});