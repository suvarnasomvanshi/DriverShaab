import React from "react";
import { Container, Typography, Box, Grid} from "@mui/material";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import Vertical_Text from "../Vertical_Text";
import {FeatureSection_container_styles,FeatureSection_servicesData} from "../../utils/Contants"

const FeatureSection = () => {

  return (
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div style={{maxWidth:"1200px",display:"flex",alignItems:"center", justifyContent:"center"}}>
    <Grid container sx={FeatureSection_container_styles} >
     <Grid item md={1} sx={{display:"flex",justifyContent:"center"}}>
     <Vertical_Text  color={"#FFFFFF"} text={"Features"}/>
      </Grid>
      <Grid item md={11}>
      <section
        className="services-section-one"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <Container>
          <Box
            className="content-container"
            sx={{ backgroundColor: "#f1f1f1" }}
          >
            <div
              className="row clearfix"
              style={{
                backgroundColor: "#f1f1f1",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <div className="sec-title">
                  <div className="inner-title-box">
                    <Typography variant="h2">
                      PROVIDING AMAZING FEATURES TO OUR CLIENTS
                    </Typography>
                  </div>
                </div>

                <Grid
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItem: "center",
                    justify: "center",
                  }}
                >
                  {FeatureSection_servicesData.map((service, index) => (
                    <Grid
                      key={index}
                      className="services-block col-md-4 col-sm-6 col-xs-6"
                      item
                      xs={6}
                      md={6}
                      ls={4}
                    >
                      <Grid item className="inner-box">
                        <div className="upper-box">
                          <div className="icon-box">{service.icon}</div>
                          <span className="number">{service.number}</span>
                        </div>

                        <Grid item sx={{ height:{xs:"85px",md:"auto"}, overflow:"scroll" }}>
                          <div className="lower-box" >
                            <Grid item>
                              {" "}
                              <Typography variant="h3">
                                {" "}
                                <a href="services.html">{service.title}</a>
                              </Typography>
                            </Grid>
                            <Grid item>
                              {" "}
                              <div className="text">
                                <Typography>{service.text}</Typography>
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Box>
        </Container>
      </section>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

export default FeatureSection;
