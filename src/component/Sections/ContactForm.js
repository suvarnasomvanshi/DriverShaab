import { Typography,TextField ,Grid,Button,} from "@mui/material";
import React,{useState} from "react";
import ContactFormImg from "../../Assets/images/ContactFormImg.png"
import Vertical_Text from "../Vertical_Text";
import {ContactForm_heading_text_Styles,ContactForm_text_Styles,ContactForm_form_container_styles,ContactForm_container_styles} from "../../utils/Contants"
const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:"",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataWithFile = new FormData();
    formDataWithFile.append("name", formData.name);
    formDataWithFile.append("email", formData.email);
    formDataWithFile.append("contactNo", formData.message);
  };

 
  return (

    
        <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div style={{maxWidth:"1200px",display:"flex",alignItems:"center", justifyContent:"center"}}>
    <div
      style={{
        width: "100vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        position: "relative",
        backgroundImage:`url(${ContactFormImg})`
      }}
    >
    <Grid container sx={ContactForm_container_styles}>

    <Grid item md={1} sx={{display:"flex",justifyContent:"center"}}> 
         <Vertical_Text  color={"#F0F0F0"} text={"Contact us"}/>
    </Grid>

    <Grid md={11} sx={{}}>
    
      {/* <Grid container sx={ContactForm_form_container_styles}> */}
      <Grid container sx={ContactForm_form_container_styles}>
        <Grid item xs={12} md={6} lg={6}>
          <Typography sx={ContactForm_heading_text_Styles}>GET IN TOUCH</Typography>
          <Typography sx={ContactForm_text_Styles}>Let us know how we can help</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}  sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "27px",
              }}>
          <form onSubmit={handleSubmit} style={{display:"flex", alignItems:'center',justifyContent:"center",maxWidth:"1200px",width:"100vw",}}>
            <Grid xs={10} sm={7} md={5} lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginX:"auto",
                gap: "16px",
              }}
            >
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: "white" }} 
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }} 
              />

                <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ backgroundColor: "white" }} 
                    />
          

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#fb561e",
                height: "41px",
                padding: "12px 24px",
                color: "#ffffff",
                width: "100%",
                marginTop: "16px",
              }}
            >
              Schedule Demo
            </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      </div>
      </div>
      </div>
    
  );
};

export default ContactForm;
