import React, { useState } from "react";
import Schedule_Demo_img from "../../Assets/images/Schedule_Demo_img.png";
import { TextField, Button, Hidden, Grid, Typography } from "@mui/material";
import  {Schedule_Demo_heading_Styles,Schedule_Demo_text_Styles} from "../../utils/Contants"

const Schedule_Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    additionalInfo: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };


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
        <div style={{ maxWidth: "1200px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap:{xs:"9px", lg:"85px"}
            }}
          >
            <Hidden smDown>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img
                  src={Schedule_Demo_img}
                  alt="Schedule_Demo"
                  style={{ height: "675px" }}
                />
              </Grid>
            </Hidden>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "9px",
                  marginBottom: "25px",
                }}
              >
                <Typography sx={Schedule_Demo_heading_Styles}>
                  Schedule a demo with us
                </Typography>
                <Typography sx={Schedule_Demo_text_Styles}>
                  {" "}
                  A At DriverShaab, we provide PAN India level B2B services To
                  corporate and logistics companies.
                </Typography>
              </Grid>

              <Grid>
                <form onSubmit={handleSubmit}>
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "35px",
                    }}
                  >
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />

                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <TextField
                      label="Contact No."
                      variant="outlined"
                      fullWidth
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                    />

                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />

                    <TextField
                      label="Additional Info"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#fb561e",
                      height: "41px",
                      padding: "12px 24px",
                      color: "#ffffff",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    Schedule Demo
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Schedule_Demo;
