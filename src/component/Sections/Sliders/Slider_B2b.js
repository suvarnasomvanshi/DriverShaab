import React from "react";
import Slider from "react-slick";
import { Grid, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../Animation.css";
import { styles_B2b, slideContents_B2b,B2bDriverServices_heading_styles,B2bDriverServices_main_description_styles} from "../../../utils/Contants";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "90vw",margin:"0 40px"}}>
      <Slider {...settings}>
        {slideContents_B2b.map((slide, index) => (
          <div key={index}>
            <Box sx={{ width: "100%" }}>
              <img src={slide.image} alt="img" style={styles_B2b.image} />
              <Box
                sx={{
                  width: "90vw",
                  ...styles_B2b.descriptionContainer,
                  ...slide.backgroundStyle,
                }}
              >
                <Typography style={B2bDriverServices_heading_styles}>{slide.heading}</Typography>
                <Typography style={B2bDriverServices_main_description_styles}>{slide.description}</Typography>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
