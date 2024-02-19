import React from "react";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import "../../Assets/css/color.css";
import BubbleLayout from "../BubbleLayout/BubbleLayout";
import { Grid,useMediaQuery,Box} from "@mui/material";
import Vertical_Text from "../Vertical_Text";
import Testimonal_Slider from "../Sections/Sliders/Testimonal_Slider";
import {testimonials_container_styles,testimonials_hading} from "../../utils/Contants";

const TestimonialsSection = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div style={{maxWidth:"1200px",display:"flex",alignItems:"center", justifyContent:"center"}}>
    <Grid container sx={testimonials_container_styles}>
      <Grid item md={1} xs={12} sx={{display:"flex",justifyContent:"center"}}>
      <Vertical_Text  color={"#FFFFFF"} text={"Feedbacks"}/>
      </Grid>
      <Grid item md={11} xs={12}sx={{display:"flex",alignItems:"center",justifyContent:"center" }}>
        <section
          className="testimonials-section"
          style={{ maxWidth: "1200px", display: "flex",}}
        >
          <div className="auto-container">
            <div className="sec-title text-center">
              <p style={testimonials_hading}>CUSTOMER TESTIMONIALS</p>
            </div>
            {/* <BubbleLayout/> */}
    {isDesktop ? (
      <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <TestimonialBlock
                  text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
                  imageSrc="image-14.jpg"
                  name="Mike Hardson"
                  designation="Student"
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TestimonialBlock
                  text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
                  imageSrc="image-15.jpg"
                  name="Christine Eve"
                  designation="Student"
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TestimonialBlock
                  text="I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
                  imageSrc="image-16.jpg"
                  name="David Cooper"
                  designation="Student"
                />
              </Grid>
              </Grid>
    ):(
      <Box>
        <Testimonal_Slider/>
      </Box>
    )}        
            
         
          </div>
        </section>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

const TestimonialBlock = ({ text, imageSrc, name, designation }) => {
  return (
    <div className="testimonials-block-one">
      <div className="inner-box">
        <div className="text">{text}</div>
        <div className="author-info">
          <div className="image">
            <img src={imageSrc} alt={name} />
          </div>
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
