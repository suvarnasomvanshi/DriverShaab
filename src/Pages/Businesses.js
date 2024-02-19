import React from "react";
import Video from "../component/Sections/Video";
import B2bDriverServices from "../component/Sections/B2bDriverServices";
import AppSection from "../component/Sections/AppSection";
import SchuduleDemoForm from "../component/Sections/SchuduleDemoForm";

const Businesses = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <div style={{
        maxWidth:'1200px'
      }}>
        <Video />
      </div>
      <div style={{
        maxWidth:'1200px'
      }}>
        {" "}
        <B2bDriverServices />
      </div>
      
     
      <div style={{
        // maxWidth:'1200px'
      }}>
        <SchuduleDemoForm />
      </div>
      <div style={{
      }}>
        <AppSection />
      </div>
      <br />
    </div>
  );
};

export default Businesses;
