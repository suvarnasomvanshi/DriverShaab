import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import "../../Assets/css/color.css";
import Vertical_Text from "../Vertical_Text";
import { FaqSection_container_styles ,faq_heading} from "../../utils/Contants";

const AccordionBlock = ({ title, content, isActive, onClick }) => (
  <li className={`accordion block ${isActive ? "active-block" : ""}`}>
    <div
      className={`acc-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ fontWeight: 700 }}
    >
      <div className="icon-outer">
        <span className={`far fa-angle-down`}></span>
      </div>
      {title}
    </div>
    <div
      className={`acc-content ${isActive ? "current" : ""}`}
      style={{ backgroundColor: "#FFF2EE" }}
    >
      <div className="content">
        <div className="text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </li>
);

const FaqSection = () => {
  const [active, setActive] = useState("First");

  const handleAccordionClick = (accordionKey) => {
    setActive(accordionKey);
  };

  return (
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div style={{maxWidth:"1200px",display:"flex",alignItems:"center", justifyContent:"center"}}>
    <Grid container sx={FaqSection_container_styles}>
      <Grid item md={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Vertical_Text color={"#C5C5C5"} text={"FAQS"} />
      </Grid>
      <Grid
        item
        md={10}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <section className="faq-section" style={{ maxWidth: "1200px" }}>
          <div className="auto-container">
            <div className="text-center mb-4">
              <p style={faq_heading}>FREQUENTLY ASKED QUESTIONS </p>
            </div>
            <div className="col-lg-12">
              <ul className="accordion-box">
                <AccordionBlock
                  onClick={() => handleAccordionClick("First")}
                  title="LHow do I Book Driver from the App?"
                  content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
                  isActive={active === "First"}
                />
                <AccordionBlock
                  onClick={() => handleAccordionClick("Second")}
                  title="LHow do I Book Driver from the App?"
                  content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
                  isActive={active === "Second"}
                />
                <AccordionBlock
                  onClick={() => handleAccordionClick("Third")}
                  title="LHow do I Book Driver from the App?"
                  content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
                  isActive={active === "Third"}
                />
                <AccordionBlock
                  onClick={() => handleAccordionClick("Fourth")}
                  title="LHow do I Book Driver from the App?"
                  content="Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl Sed luctus venenatis pellentesque."
                  isActive={active === "Fourth"}
                />
              </ul>
            </div>
          </div>
        </section>
      </Grid>
    </Grid>
    </div>
    </div>
  );
};

export default FaqSection;
