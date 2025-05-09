const slides = [
    { src: 'images/castorice-purple-7680x4320-22219.jpg', caption: 'Our first photo together' },
    { src: 'images/nezuko-kamado-ai-3840x2160-12515.jpg', caption: 'That rainy walk we loved' },
    { src: 'images/tanjiro-kamado-ai-3840x2160-12479.jpg', caption: 'Your smile on our wedding day' },
    // { src: 'images/photo4.jpg', caption: 'One year later — stronger than ever 💖' }
  ];
  
  let index = 0;
  
  function nextSlide() {
    index = (index + 1) % slides.length;
    document.getElementById('slide').src = slides[index].src;
    document.getElementById('caption').textContent = slides[index].caption;
  }
  