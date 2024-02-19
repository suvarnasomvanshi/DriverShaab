import b2b1 from "../Assets/images/b2b1.png";
import b2b2 from "../Assets/images/b2b2.png";
import b2b3 from "../Assets/images/b2b3.png";

import Service_Section1 from "../Assets/images/Service_Section1.png";
import Service_Section2 from "../Assets/images/Service_Section2.png";
import Service_Section3 from "../Assets/images/Service_Section3.png";

export const aboutus_container_styles = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  backgroundColor: "#FFFFFF",
//   padding:{
//     xs:["10px","0px","10px","0px"],
//     md:["30px","0px","30px","0px"]
// }
padding: {
  xs: "10px 0px",
  md: "30px 0px"
}
};

export const video_container_styles = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  backgroundColor: "#FFFFFF",
  padding:"0 0 30px 0"
};

export  const slideContents_testimonial = [
    {
        text:"I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.",
        imageSrc:"image-14.jpg",
        name:"Mike Hardson",
        designation:"Student",
    },
    {
        text:"I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.",
        imageSrc:"image-15.jpg",
        name:"Christine Eve",
        designation:"Student",
    },
    {
        text:"I was very impressed by the company service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.",
        imageSrc:"image-16.jpg",
        name:"David Cooper",
        designation:"Student",
    }
] 

export const slideContents_Service = [
    {
      image: Service_Section1,
      heading: "Customized tech solution",
      description: "Tailored logistics tech solutions enhance efficiency, adaptability, and cost management by customizing software to address specific operational needs."
    },
    {
      image: Service_Section2,
      heading: "Pay as you go",
      description: "The pay-as-you-go model allows users to pay only for the specific resources or services they consume, offering flexibility and cost efficiency without upfront commitments."
    },
    {
      image: Service_Section3,
      heading: "Verified Drivers",
      description: "Drivers with over three years of experience, thoroughly trained, and background verified, ensuring a reliable and skilled workforce for transportation needs."
    },
  ];



  export const styles_Service = {
    container: {
      padding: "0 20px",
      // margin: '20px'
    },
    card_container_style: {
      width:"60vw",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '36px',
      backgroundColor: '#fff',
      height: '328px',
      borderRadius: '10px',
      // margin: "auto auto",
      // width:"350px",
      // padding: ['30px', '4px', '30px', '4px'],
      boxShadow: '0 8px 23px 0 rgba(0, 0, 0, 0.4)'
    },
    text_container: {
      gap: '36px',
      padding: ['2px', '5px', '2px', '5px'],
    },
  
    card_heading_style: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: "18px",
      lineHeight:'21.78px',
      textAlign: 'center',
      color: '#787878',
      marginBottom: '13px',
      textTransform:"uppercase"
    },
    card_description_style: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize:"16px",
      lineHeight:'27px',
      textAlign: 'center',
      color: '#787878'
    },
    sec_service_img : {
      height: "38.25px",
      width: "38.25px",
    }
  };
  
  export const Schedule_Demo_heading_Styles = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "16px",
      md: "24px",
    },
    lineHeight: {
      xs: "24px",
      md: "28.8px",
    },
    textAlign: "center",
    textTransform :"uppercase"
  };
  export const Schedule_Demo_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "16px",
      md: "16px",
    },
    lineHeight: {
      xs: "24px",
      md: "25.76px",
    },
    textAlign: "center",
  };

  export const scheduledemo_form_heading_Styles = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "16px",
      md: "24px",
    },
    lineHeight: {
      xs: "24px",
      md: "28.8px",
    },
    textAlign: "center",
    textTransform: "uppercase",
  };
  export const scheduledemo_form_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "16px",
      md: "16px",
    },
    lineHeight: {
      xs: "24px",
      md: "25.76px",
    },
    textAlign: "center",
  };

  export const styles_B2b= {
    container: {
      padding: "0 20px",
      margin: '10px'
    },
    itemContainer: {
      display: "flex",
      flexDirection: "column",
    },
    descriptionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "20px",
      padding: "10px 30px 20px 15px",
      // maxWidth: '400px'
    },
    image: {
      maxWidth: '90vw'
    },
    background1: {
      background: "#f9e1d9",
    },
    background2: {
      background: "#F4F8FF",
    },
  };

  export const slideContents_B2b = [
    {
      image: b2b1,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles_B2b.background1,
    },
    {
      image: b2b2,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles_B2b.background2,
    },
    {
      image: b2b3,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles_B2b.background1,
    },
  ];



  export const B2bDriverServices_main_heading_styles = {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "32px"
    },
    lineHeight: {
      xs: '16.8px',
      md: '38.4px'
    },
    color: "#000000",
    textAlign: 'center',
    textTransform: "uppercase",
  };
  
  export const B2bDriverServices_main_description_styles = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "10px",
      md: "18px"
    },
    lineHeight: {
      xs: '12px',
      md: '21.6px'
    },
    color: "#373737",
    textAlign: 'center',
  };
  
  export const B2bDriverServices_heading_styles = {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: {
      xs: "12px",
      md: "16px"
    },
    lineHeight: {
      xs: '14.4px',
      md: '28.8px'
    },
    color: "#373737",
    textAlign: 'center',
    textTransform: "uppercase",
  };
  
  export const B2bDriverServices_description_styles = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "14px",
      md: "16px"
    },
    lineHeight: {
      xs: '12px',
      md: '19.2px'
    },
    color: "#373737",
    
  };
  

  export const ContactForm_heading_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      sm: "32px",
    },
    lineHeight: {
      xs: "16.8px",
      sm: "38.4px",
    },
    textAlign: "center",
    color:"#FFFFF",
    textTransform: "uppercase",
  };
  export const ContactForm_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "12px",
      sm: "18px",
    },
    lineHeight: {
      xs: "18px",
      sm: "27px",
    },
    textAlign: "center",
    color:"#FB561E"
  };
 

  export const  faq_heading = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "12px",
      md: "32px",
    },
    lineHeight: {
      xs: "18px",
      md: "38.4px",
    },
    textAlign: "center",
    color:"#00000"
  };
  export const ContactForm_form_container_styles={
    display:"flex", 
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"column",
    gap:{md:"40px",xs:"11px"},
    padding:{
        xs:["11px","0px","11px","0px"],
        md:["96px","24px","93px","24px"]
    }
  }
  export const ContactForm_container_styles ={
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, 
    padding: {
      xs: "10px 0px 30px 0px",
      sm:"10px 0px 30px 0px",
      md: "20px 0px 30px 0px",
      lg: "40px 0px"
    }
}

export const FaqSection_container_styles ={
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, 
    backgroundColor:"#F1F1F1",
    padding: {
      xs: "20px 0px 20px 0px",
      sm:"30px 0px 20px 0px",
      md: "30px 0px 30px 0px",
      lg: "40px 0px"
    }
}

export const FeatureSection_container_styles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    bgcolor: "#f1f1f1",
  //   padding:{
  //     xs:["10px","0px","10px","0px"],
  //     md:["30px","0px","30px","0px"]
  // }
  padding: {
    xs: "10px 0px",
    md: "30px 0px"
  }
  };

  export const FeatureSection_servicesData = [
    {
      icon: <img src={"featureimg2.png"} />,
      number: "01",
      title: "Real Time Tracking",
      text: "  Enjoy peace of mind with our advanced real-time tracking feature. Stay informed about your journey's progress, monitor the driver's location, and receive accurate ETAs.",
    },
    {
      icon: <img src={"featureimg1.png"} />,
      number: "02",
      title: "Enhanced Security Measures",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <img src={"featureimg3.png"} />,
      number: "03",
      title: "24/7 Customer Support",
      text: "At Drivershaab, your safety is our top priority. Benefit from our comprehensive security measures, including background-checked and professionally trained drivers.",
    },
    {
      icon: <img src={"featureimg4.png"} />,
      number: "04",
      title: "Credibility & Trust",
      text: "With a successful track record of five years, Drivershaab has become synonymous with credibility and trust.",
    },
    {
      icon: <img src={"featureimg5.png"} />,
      number: "05",
      title: "Vehicle Cleanliness",
      text: "A comfortable journey begins with a well-maintained and clean vehicle. Drivershaab ensures that our fleet undergoes regular maintenance, adhering to the highest standards of cleanliness..",
    },
    {
      icon: <img src={"featureimg6.png"} />,
      number: "06",
      title: "Privacy",
      text: " We understand the importance of confidentiality. Drivershaab values your privacy, and our drivers are trained to respect it. ",
    },
  ];

  export const testimonials_hading={
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "32px",
    },
    lineHeight: {
      xs: "16.8px",
      md: "38.4x",
    },
    textAlign: "center",
    textTransform: "uppercase",
  }
  

  export const team_heading_style={
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "24px",
    },
    lineHeight: {
      xs: "30px",
      md: "30x",
    },
    textAlign: "center",
    textTransform: "uppercase",
  }
  
  
  export const Team_heading_style = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "24px",
    },
    lineHeight: {
      xs: "57.7px",
      md: "30x",
    },
    textAlign: "center",
    textTransform: "uppercase",
  }

  export const JoinAsDriver_Section_heading_Styles = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: {
      xs: "16px",
      md: "24px",
    },
    lineHeight: {
      xs: "24px",
      md: "28.8px",
    },
    textAlign: "center",
    textTransform: "uppercase",
  };
  export const JoinAsDriver_Section_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "16px",
      md: "16px",
    },
    lineHeight: {
      xs: "24px",
      md: "25.76px",
    },
    textAlign: "center",
  };

  export const JoinAsDriver_Section_upload_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "14px",
      md: "10px",
    },
    lineHeight: {
      xs: "21px",
      md: "15px",
    },
    textAlign: "center",
  };

  export const JoinAsDriver_Section_file_text_Styles = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: {
      xs: "10px",
      md: "10px",
    },
    lineHeight: {
      xs: "15px",
      md: "15px",
    },
    textAlign: "center",
  };

  export const JoinAsDriver_Section_upload_icon_style = {
    height: "15px",
    width: "15px",
    marginLeft: "10px",
  };


  export const numberSection_container_styles={
    backgroundColor:"#F1F1F1",
    height:{md:'213px'},
    padding:{ 
      xs: ['6px', '26px', '6px', '26px'],  
      md: ['64px', '24px', '64px', '24px'],}
  }
  export const numberSection_wrapper_Styles={
    display: 'flex', 
    flexDirection: 'column',
     alignContent: 'center', 
     justifyContent: 'center',
     textAlign:"center"
  }
  export const numberSection_number_Styles = {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: {
      xs: "16px",
      sm: "40px",
    },
    lineHeight: {
      xs:'24px',
      sm:'60px',
    },
    textAlign:'center'
  };

  export const numberSection_text_Styles = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "8px",
      sm: "14px",
    },
    lineHeight: {
      xs:'12px',
      sm:'21px',
    },
    textAlign:'center',
    color:"#FB561E"
  };

  export  const Service_container_styles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    backgroundColor: "#FFFFFF",
    padding: {
      xs: "10px 0px 90px 0px",
      sm:"10px 0px 120px 0px",
      md: "10px 0px 120px 0px",
      lg: "30px 0px"
    }
  };

  export const ServiceSection_Heading ={
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: {
      xs: "14px",
      md: "32px",
    },
    lineHeight: {
      xs:'16.8px',
      md:'38.4px',
    },
    textAlign:'center',
    marginBottom:{md:"73px", xs:"20px"  },
    color:"#000000",
    textTransform :'uppercase'
  }

  export const TeamSection_container_styles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    backgroundColor:"#F0F0F0",
    padding: {
      xs: "10px 0px",
      sm:"10px  0px",
      md: "30px 0px",
      lg: "30px 0px"
    }
  };

  export const testimonials_container_styles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    backgroundColor:"#F1F1F1",
    padding: {
      xs: "20px 0px 60px 0px",
      sm:"15px 0px 60px 0px",
      md:"15px 0px 60px 0px",
      lg: "50px 0px"
    },
  };

  export const video_heading  ={
    fontWeight: "500",
    fontFamily: "Inter",
    fontSize: {
      xs: "14px",
      md: "32px",
    },
    lineHeight: {
      xs:'16.8px',
      md:'38.4px',
    },
    textAlign: "center",
    textTransform:"uppercase",
    marginBottom:"26px"
  }