import React, { useRef, useEffect, useState } from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import "../../Animation.css";
import { Grid } from "@mui/material";
import Vertical_Text from "../Vertical_Text";
import  {aboutus_container_styles} from "../../utils/Contants";


const AboutSection = () => {
  const fleep1Ref = useRef(null);
  const [fleep1Visible, setFleep1Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === fleep1Ref.current) {
            setFleep1Visible(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (fleep1Ref.current) {
      observer.observe(fleep1Ref.current);
    }

    return () => {
      if (fleep1Ref.current) {
        observer.unobserve(fleep1Ref.current);
      }
    };
  }, []);

  return (
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div style={{maxWidth:"1200px",display:"flex",alignItems:"center", justifyContent:"center"}}>
    <Grid container sx={aboutus_container_styles}>
      <Grid
        item
        md={1}
        xs={12}
        sx={{display: "flex", justifyContent: "center" }}
      >
        <Vertical_Text color={"#F0F0F0"} text={"About Us"} />
      </Grid>
      <Grid item md={11} xs={12}>
        <div
          ref={fleep1Ref}
          style={{
            // width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            // padding:'50px 0'
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div className="aboutus_container" style={{ maxWidth: "1200px" }}>
              <div className="aboutus_text_container">
                <div
                  className="aboutus_texts"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    backgroundColor: "#fff",
                    marginRight: { lg: "50px", xs: 0 },
                  }}
                >
                  <div className="aboutus_two_texts">
                    <div className="aboutus_heading">
                      WE PROMISE, YOU WILL HAVE THE BEST EXPERIENCE
                    </div>

                    <div className="text">
                      <p>
                        At DriverShaab we eliminate your hassle of driving with
                        our timely and on-demand driver booking services.
                        Whether it is late night partying, driving to work,
                        going for a long trip or more, we got you covered!
                      </p>
                      <p>
                        We also provide SaaS based driver related services to
                        our B2B corporate and logistics partners, feel free to
                        reach out to us and schedule a demo.
                      </p>
                      <p>
                        Our Driver partners are background verified and both
                        transmission trained so all you need to do is now is
                        schedule a ride!
                      </p>
                    </div>
                  </div>
                  <div
                    className={`about_us_btn ${
                      fleep1Visible ? "hero-animation" : ""
                    }`}
                  >
                    <a href="#" className="book-btn theme-btn btn-style-three">
                      Schedule Demo (B2B)
                    </a>
                  </div>
                </div>
              </div>

              <div className="aboutus_car_img">
                <img
                  src="fleepbackground.png"
                  alt=""
                  className={`fleepbackground`}
                />
                <img
                  src="fleep1.png"
                  alt=""
                  className={`fleep1 ${
                    fleep1Visible ? "fleep1-animation" : ""
                  }`}
                />
                <img
                  src="fleep2.png"
                  alt=""
                  className={`fleep2 ${
                    fleep1Visible ? "fleep2-animation" : ""
                  }`}
                />
                <img
                  src="fleep3.png"
                  alt=""
                  className={`fleep3 ${
                    fleep1Visible ? "fleep3-animation" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>

    </div>
    </div>
  );
};

export default AboutSection;
