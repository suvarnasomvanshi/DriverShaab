import React from "react";

const ServiceSection_card = ({ src, alt, heading, description }) => {
  return (
    <>
      <div className="sec-service-card" style={{backgroundColor:'#fff'}}>
        <img src={src} alt={alt} className="sec-service-img" />
        <div className="sec-service-text-div">
        <p className="sec-service-heading">{heading}</p>
        <p className="sec-service-description"
        >
          {description}
        </p>
        </div>
      
      </div>
    </>
  );
};

export default ServiceSection_card;
