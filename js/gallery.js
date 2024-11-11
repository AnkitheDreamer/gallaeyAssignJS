document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll("#gallery ul li img");
  const fullImage = document.getElementById("full-image");
  const caption = document.getElementById("image-caption");

  thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
          fullImage.style.transform = "scale(0.9)"; 
          setTimeout(() => {
              fullImage.src = thumbnail.getAttribute("data-large");
              caption.textContent = thumbnail.getAttribute("data-caption");
              fullImage.style.transform = "scale(1)"; 
          }, 100); // Adds a slight delay for the animation effect
      });
  });
});
