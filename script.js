const slides = [
    { src: 'images/photo1.jpg', caption: 'Our first photo together' },
    { src: 'images/photo2.jpg', caption: 'That rainy walk we loved' },
    { src: 'images/photo3.jpg', caption: 'Your smile on our wedding day' },
    { src: 'images/photo4.jpg', caption: 'One year later — stronger than ever 💖' }
  ];
  
  let index = 0;
  
  function nextSlide() {
    index = (index + 1) % slides.length;
    document.getElementById('slide').src = slides[index].src;
    document.getElementById('caption').textContent = slides[index].caption;
  }
  