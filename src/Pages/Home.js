import React from "react";
import Hero_Section from "../component/Sections/Hero_Section";
import NumberSection from "../component/Sections/NumberSection";
import AboutSection from "../component/Sections/Aboutus_section";
import FeatureSection from "../component/Sections/FeaturesSection";
import BookDemo_Section from "../component/Sections/BookDemo_Section";
import Service_Section from "../component/Sections/Service_Section";
import AppSection from "../component/Sections/AppSection";
import TestimonialsSection from "../component/Sections/TestimonialsSection";
import ContactForm from "../component/Sections/ContactForm";
import TeamSection from "../component/Sections/TeamSection";
import FaqSection from "../component/Sections/FaqSection";
import Location from "../component/Sections/Location"

const Home = () => {
  return (
    <div>
      <Hero_Section />
      <NumberSection />
      <AboutSection />
      <FeatureSection />
      <BookDemo_Section />
      <Service_Section />
      <Location/> 
      <TeamSection />
      <AppSection />
      <TestimonialsSection />
      <ContactForm/>
      <FaqSection />
    </div>
  );
};

export default Home;
