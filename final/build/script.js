const imageSets = {
  peppermintBark: [
    "/final/assets/peppermintBark/image1.jpg",
    "/final/assets/peppermintBark/image2.jpg",
    "/final/assets/peppermintBark/image3.jpg",
    "/final/assets/peppermintBark/image4.jpg",
    "/final/assets/peppermintBark/image5.jpg",
    "/final/assets/peppermintBark/image6.jpg",
    "/final/assets/peppermintBark/image7.jpg",
    "/final/assets/peppermintBark/image8.jpg",
  ],
  espresso: [
    "/final/assets/espresso/espresso1.jpg",
    "/final/assets/espresso/espresso2.jpg",
    "/final/assets/espresso/espresso3.jpg",
    "/final/assets/espresso/espresso4.jpg",
    "/final/assets/espresso/espresso5.jpg",
    "/final/assets/espresso/espresso6.jpg",
    "/final/assets/espresso/espresso7.jpg",
    "/final/assets/espresso/espresso8.jpg",
    "/final/assets/espresso/espresso9.jpg",
    "/final/assets/espresso/espresso10.jpg",
    "/final/assets/espresso/espresso11.jpg",
    "/final/assets/espresso/espresso12.jpg"
  ],
  birthdayCake: [
    "/final/assets/birthdaycake/image1.jpg",
    "/final/assets/birthdaycake/image2.jpg",
    "/final/assets/birthdaycake/image3.jpg",
    "/final/assets/birthdaycake/image4.jpg",
    "/final/assets/birthdaycake/image5.jpg"
  ] ,
  strawberry: [
    "/final/assets/strawberry/image1.jpg",
    "/final/assets/strawberry/image2.jpg",
    "/final/assets/strawberry/image3.jpg",
    "/final/assets/strawberry/image4.jpg",
    "/final/assets/strawberry/image5.jpg"
  ], 
  fig: [
    "/final/assets/fig/image1.jpg",
    "/final/assets/fig/image2.jpg",
    "/final/assets/fig/image3.jpg",
    "/final/assets/fig/image4.jpg",
    "/final/assets/fig/image5.jpg"
  ], 
  rose: [
    "/final/assets/rose/image1.jpg",
    "/final/assets/rose/image2.jpg",
    "/final/assets/rose/image3.jpg",
    "/final/assets/rose/image4.jpg"
  ],
  coconut: [
      "/final/assets/coconut/image1.jpg",
      "/final/assets/coconut/image2.jpg",
      "/final/assets/coconut/image3.jpg",
      "/final/assets/coconut/image4.jpg",
      "/final/assets/coconut/image5.jpg"
  ], 
  lavender: [
    "/final/assets/lavender/image1.jpg",
    "/final/assets/lavender/image2.jpg",
    "/final/assets/lavender/image3.jpg",
    "/final/assets/lavender/image4.jpg",
    "/final/assets/lavender/image5.jpg",
    "/final/assets/lavender/image6.jpg"
  ],
  original: [
      "/final/assets/original/image1.jpg",
      "/final/assets/original/image2.jpg",
      "/final/assets/original/image3.jpg",
      "/final/assets/original/image4.jpg",
      "/final/assets/original/image5.jpg"
  ], 
  mint: [
      "/final/assets/mint/image1.jpg",
      "/final/assets/mint/image2.jpg",
      "/final/assets/mint/image3.jpg",
      "/final/assets/mint/image4.jpg",
      "/final/assets/mint/image5.jpg"
  ],
  mango: [
      "/final/assets/mango/image1.jpg",
      "/final/assets/mango/image2.jpg",
      "/final/assets/mango/image3.jpg",
      "/final/assets/mango/image4.jpg",
      "/final/assets/mango/image5.jpg"
  ]
};

let activeImages = imageSets.peppermintBark;
const imgElement = document.getElementById('card-img');



let currentIndex = 0;
let slideshowInterval = null;

imgElement.src = activeImages[0];   // correct indexing

function startSlideshow() {
  clearInterval(slideshowInterval);

  currentIndex = 1;
  fadeToImage(activeImages[currentIndex]);

  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % activeImages.length;
    fadeToImage(activeImages[currentIndex]);
  }, 1700);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  currentIndex = 0;
  fadeToImage(activeImages[0]);
}

 function fadeToImage(src) {
   imgElement.style.transition = "opacity 0.8s ease";
   imgElement.style.opacity = 0;

    setTimeout(() => {
      console.log("Trying to load:", src)

     imgElement.src = src;
     imgElement.style.opacity = 1;
   }, 800); // Wait 0.8s before fading back in
 }

 document.querySelectorAll(".color-box").forEach(btn => {
  btn.addEventListener("click", () => {
    const setName = btn.dataset.set;
    const displayName = btn.dataset.name;

    activeImages = imageSets[setName];
    currentIndex = 0;
    productNameElement.textContent = displayName;
    fadeToImage(activeImages[0]);

    setActiveButton(btn);

    // UNFILL HEART WHEN SWITCHING COLORS
    document.querySelector(".heart-btn").classList.remove("liked");
  });
});
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

const productNameElement = document.querySelector(".product-flavor");


document.querySelectorAll(".color-box").forEach(btn => {
  btn.addEventListener("click", () => {
    const setName = btn.dataset.set;
    const displayName = btn.dataset.name;

    // update slideshow set
    activeImages = imageSets[setName];
    currentIndex = 0;

    // update label
    productNameElement.textContent = displayName;

    // show first image immediately
    fadeToImage(activeImages[0]);

    // update which button is active
    setActiveButton(btn);
  });
});

function setActiveButton(button) {
  document.querySelectorAll(".color-box").forEach(btn => {
    btn.classList.remove("active");  // remove from all
  });
  button.classList.add("active");    // add to clicked one
}

document.querySelector(".heart-btn").addEventListener("click", function () {
  this.classList.toggle("liked");
});