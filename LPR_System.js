window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("introVideo");
    if (video) {
      video.loop = true;
      video.play().catch(err => {
        console.warn("Autoplay was blocked:", err);
      });
    }
  });