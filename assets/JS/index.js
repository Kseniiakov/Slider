"use strict";

const imgs = [
    'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg',
    'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
    'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
    'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    'http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg',
    'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
  ];
  
  const slider = document.querySelector('#slider');
  
  let currentSlide = 0;
  for (const src of imgs) {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '400px';
  
    slider.append(img);
  }
  
  const startSlide = slider.children[0];
  startSlide.classList.add('show');
  
  function nextSlide() {
    for (const elem of slider.children) {
      elem.classList.remove('show');
    }
  
    const slide = slider.children[currentSlide];
  
    if (currentSlide < imgs.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    slide.classList.add('show');
  }

  let timerId = null;
  let timerRunning = false;
  
  function startSlideshow() {
    if(timerRunning === true) {
      return
    }
    timerId = setInterval(
      nextSlide,
      2000,
    );
    timerRunning = true;
  };

  function stopSlideshow() {
    clearInterval(timerId);
    timerRunning = false;
  };

  function rightSlideshow() {

    for (const elem of slider.children) {
        elem.classList.remove('show');
    }
    const slide = slider.children[currentSlide];
      
    if (currentSlide < imgs.length - 1) {
        currentSlide++;
    }
    slide.classList.add('show');
  };

  function leftSlideshow() {

    for (const elem of slider.children) {
        elem.classList.remove('show');
    }
    const slide = slider.children[currentSlide];
      
    if (currentSlide > 0) {
        currentSlide--;
    }
    slide.classList.add('show');
  }
  
  const startBtn = document.querySelector('#start-slideshow');
  startBtn.addEventListener('click', startSlideshow);

  const stopBtn = document.querySelector('#stop-slideshow');
  stopBtn.addEventListener('click', stopSlideshow);

  const rightBtn = document.querySelector('#right-slideshow');
  rightBtn.addEventListener('click', rightSlideshow);

  const leftBtn = document.querySelector('#left-slideshow');
  leftBtn.addEventListener('click', leftSlideshow);