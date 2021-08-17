import React from "react";

const ImageSlider = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var slideImages = document.querySelectorAll(".slide"),
      dirRight = document.getElementById("dir-control-right"),
      current = 0;
    //if javascript is on apply styling
    function jsActive() {
      for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.add("slider-active");
      }
    }
    // Clear images
    function reset() {
      for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.remove("slide-is-active");
      }
    }
    //init slider
    function startSlide() {
      reset();
      slideImages[0].classList.add("slide-is-active");
      setTimeout(function () {
        for (var i = 0; i < slideImages.length; i++) {
          slideImages[i].classList.add("slide-transition");
        }
      }, 20);
    }

    //slide right
    function slideRight() {
      reset();
      slideImages[current + 1].classList.add("slide-is-active");
      current++;
    }

    dirRight.addEventListener("click", function () {
      if (current === slideImages.length - 1) {
        current = -1;
      }
      slideRight();
    });
    //apply styling
    jsActive();
    startSlide();
  });
  return (
    <div className="wrap">
      <div id="slider">
        <div className="slide slide1">
          <div className="slide-content"></div>
        </div>
        <div className="slide slide2">
          <div className="slide-content"></div>
        </div>
        <div className="slide slide3">
          <div className="slide-content"></div>
        </div>
      </div>
      <div id="dir-control-right" className="dir-control">
        <img
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/arrow_right.svg?v=7963924712323584967"
          alt="right slider"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
