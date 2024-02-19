import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../Animation.css";
import { slideContents_testimonial } from "../../../utils/Contants";

const Testimonal_Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    appendDots: (dots) => (
      <div style={{ marginBottom: "0px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div style={{ width: "100vw", height:"auto", margin: "5px 5vw" }}>
    
      <Slider {...settings}>
        {slideContents_testimonial.map((slide, index) => (
          <div key={index} style={{ width: "100vw" }}>
            <div className="testimonials-block-one">
              <div className="inner-box">
                <div className="text">{slide.text}</div>
                <div className="author-info">
                  <div className="image">
                    <img src={slide.imageSrc} alt={slide.name} />
                  </div>
                  <div className="name">{slide.name}</div>
                  <div className="designation">{slide.designation}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonal_Slider;
