const slides = [
    { src: 'images/castorice-purple-7680x4320-22219.jpg', caption: 'Our first photo together' },
    { src: 'images/nezuko-kamado-ai-3840x2160-12515.jpg', caption: 'That rainy walk we loved' },
    { src: 'images/tanjiro-kamado-ai-3840x2160-12479.jpg', caption: 'Your smile on our wedding day' },
];

let index = 0;

function showSlide() {
  const img = document.getElementById('slide');
  const caption = document.getElementById('caption');

  img.classList.add('opacity-0');
  setTimeout(() => {
    img.src = slides[index].src;
    caption.textContent = slides[index].caption;
    img.classList.remove('opacity-0');
  }, 400);
}

// Auto-slide every 5 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 5000);
