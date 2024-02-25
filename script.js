

const video = document.querySelector('.video');
const images = document.querySelectorAll('.navigation li')

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        video.src = `assets/videos/video${index + 1}.mp4`;
    });
})