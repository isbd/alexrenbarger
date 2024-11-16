function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    // Set the image source
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;

    // Update modal information
    document.querySelector('.modal-info h2').textContent = imgElement.dataset.title;
    document.querySelector('.modal-info p:nth-child(2)').textContent = `${imgElement.dataset.medium}`;
    document.querySelector('.modal-info p:nth-child(3)').textContent = `${imgElement.dataset.size}`;

    modal.style.display = "flex";

    // Store current image element for navigation
    currentImage = imgElement;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function navigateImages(direction) {
    if (!currentImage) return;

    const images = document.querySelectorAll('.gallery img');
    const currentIndex = Array.from(images).indexOf(currentImage);
    let newIndex = currentIndex + direction;

    // Loop around if we reach the end or beginning
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;

    // Open modal with new image
    openModal(images[newIndex]);
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") navigateImages(-1);
        if (e.key === "ArrowRight") navigateImages(1);
        if (e.key === "Escape") closeModal();
    }
});