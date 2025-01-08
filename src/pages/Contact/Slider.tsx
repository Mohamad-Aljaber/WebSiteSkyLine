import React from "react";

const Slider: React.FC = () => {
  return (
    <div className="slider-area slider-bg">
      {/* Single Slider */}
      <div className="single-slider d-flex align-items-center slider-height3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-12">
              <div className="hero__caption hero__caption3 text-center">
                <h1
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                >
                  Contact us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Shape */}
      <div className="slider-shape d-none d-lg-block">
        <img
          className="slider-shape1"
          src="assets/img/hero/top-left-shape.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
