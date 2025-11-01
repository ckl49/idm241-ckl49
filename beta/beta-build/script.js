const img_array = [
  "/beta/assets/image1.png",
  "/beta/assets/image2.png",
  "/beta/assets/image3.png",
  "/beta/assets/image4.png",
  "/beta/assets/image5.png",
  "/beta/assets/image6.png",
  "/beta/assets/image7.png",
  "/beta/assets/image8.png",
];

const imgElement = document.getElementById('card-img');

let currentIndex = 0;
let slideshowInterval = null;

// Show the first image initially
imgElement.src = img_array[0];

function startSlideshow() {
  clearInterval(slideshowInterval);
  
  // Fade into image2 on hover
  currentIndex = 1;
  fadeToImage(img_array[currentIndex]);

  // Start cycling through the rest
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % img_array.length;
    fadeToImage(img_array[currentIndex]);
  }, 1500); // Each image stays for 1.5 seconds
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  currentIndex = 0;
  fadeToImage(img_array[0]); // Fade back to image1
}

function fadeToImage(src) {
  imgElement.style.transition = "opacity 0.8s ease";
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = src;
    imgElement.style.opacity = 1;
  }, 300); // Wait 0.3s before fading back in
}

imgElement.addEventListener('mouseenter', startSlideshow);
imgElement.addEventListener('mouseleave', stopSlideshow);

// handling the show more options
const showMoreOptionsBtn = document.getElementById('show-more-options-btn')
const moreOptions1 = document.querySelector('.mint-color-box-more')
const moreOptions2 = document.querySelector('.yellow-color-box-more')

// this will change the display value of all buttons
function showMoreOptions() {
  moreOptions1.style.display = "flex";
  moreOptions2.style.display = "flex";

  // ensure transitions are defined before the opacity change
  moreOptions1.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  moreOptions2.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  moreOptions1.style.opacity = 0;
  moreOptions2.style.opacity = 0;
  moreOptions1.style.transform = "translateY(10px)";
  moreOptions2.style.transform = "translateY(10px)";

  requestAnimationFrame(() => {
    moreOptions1.style.opacity = 1;
    moreOptions2.style.opacity = 1;
    moreOptions1.style.transform = "translateY(0)";
    moreOptions2.style.transform = "translateY(0)";
  });

  // hide the button
  showMoreOptionsBtn.style.display = "none";
}

showMoreOptionsBtn.addEventListener('click', showMoreOptions);
