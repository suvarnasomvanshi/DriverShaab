import React from "react";
import AppSection from "../component/Sections/AppSection";
import JoinAsDriver_Section from "../component/Sections/JoinAsDriver_Section";
import Service_Section from "../component/Sections/Service_Section";

const JoinasDriver = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <JoinAsDriver_Section />
      <Service_Section />
      <AppSection />
    </div>
  );
};

export default JoinasDriver;
