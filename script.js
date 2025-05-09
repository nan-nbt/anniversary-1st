const slides = [
  { src: 'images/image-1.jpg', caption: 'Our first photo together' },
  { src: 'images/image-2.jpg', caption: 'The day you made me laugh endlessly' },
  { src: 'images/image-3.jpg', caption: '1 year later, still falling for you 💖' }
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

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 5000);

// ❤️ Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.fontSize = `${Math.random() * 24 + 16}px`;
  heart.innerText = "💖";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);
