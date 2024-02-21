import React from "react";
import Slider from "react-slick";
import { Box,Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {slideContents_Service,styles_Service} from "../../../utils/Contants";
import "../../../Animation.css";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "1%",
  };

  // console.log(styles_Service.sec_service_img)
  

  return (
    <div  style={{width:'100vw',margin:'0 5vw'}}>
      <Slider {...settings}>
        {slideContents_Service.map((slide, index) => (
          <div key={index} style={{width:"100vw",minHeight:"380px",}}>
          
            <Box  sx={styles_Service.card_container_style}>
              <Box item>
                <img src={slide.image} alt="img" style={styles_Service.sec_service_img}/>
              </Box>
              <Box item sx={styles_Service.text_container}>
                <Typography sx={styles_Service.card_heading_style}>{slide.heading}</Typography>
                <Typography sx={styles_Service.card_description_style}>{slide.description}</Typography>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
