import React from "react";
import ServiceSection_card from "../ServiceSection_card";
import Service_Section1 from "../../Assets/images/Service_Section1.png";
import Service_Section2 from "../../Assets/images/Service_Section2.png";
import Service_Section3 from "../../Assets/images/Service_Section3.png";
import { Container, useMediaQuery, Typography, Grid, Box } from "@mui/material";
import "../.././Assets/css/style.css";
import "../.././Assets/css/bootstrap.css";
import "../.././Assets/css/responsive.css";
// import SimpleSlider from "../Sliders/Service_Slider";
import SimpleSlider from "./Sliders/Service_Slider";
import Vertical_Text from "../Vertical_Text";
import {
  Service_container_styles,
  ServiceSection_Heading,
} from "../../utils/Contants";

const Service_Section = () => {
  const isDesktop = useMediaQuery("(min-width:1100px)");

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width:"100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container sx={Service_container_styles}>
            <Grid
              item
              md={1}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Vertical_Text color={"#F0F0F0"} text={"Services"} />
            </Grid>

            <Grid
              item
              md={11}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={ServiceSection_Heading}>OUR OFFERINGS</Typography>

              {isDesktop ? (
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "25px",
                    minHeight: { lg: "450px" },
                  }}
                >
                  <ServiceSection_card
                    src={Service_Section1}
                    alt="OurOffering_img2"
                    heading="Customized tech solution"
                    description="Tailored logistics tech solutions enhance efficiency, adaptability, and cost management by customizing software to address specific operational needs."
                  />
                  <ServiceSection_card
                    src={Service_Section2}
                    alt="Service_Section1"
                    heading="Pay as you go"
                    description="The pay-as-you-go model allows users to pay only for the specific resources or services they consume, offering flexibility and cost efficiency without upfront commitments."
                  />
                  <ServiceSection_card
                    src={Service_Section3}
                    alt="Service_Section2"
                    heading="Verified Drivers"
                    description="Drivers with over three years of experience, thoroughly trained, and background verified, ensuring a reliable and skilled workforce for transportation needs."
                  />
                </Grid>
              ) : (
                <Grid container>
                  {" "}
                  <SimpleSlider />
                </Grid>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Service_Section;
