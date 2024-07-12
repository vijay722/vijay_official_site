function toggleZoom(img) {
    img.classList.toggle("zoomed");
}
function downloadResume() {
    // Use file:/// protocol and replace backslashes with forward slashes
    window.location.href = 'index.pdf';
}
