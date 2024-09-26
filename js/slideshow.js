$(document).ready(function () {
  let slideIndex = 0;
  showPhotos();

  function showPhotos() {
    let i;
    const slides = $(".photo img");
    // const slides = $("#instafeed a");

    for (i = 0; i < slides.length; i++) {
      $(slides[i]).hide();
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    $(slides[slideIndex - 1]).show();

    setTimeout(showPhotos, 300);
  }
});
