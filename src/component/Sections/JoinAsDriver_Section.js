import React, { useState } from "react";
import joinDriver from "../../Assets/images/joinDriver.png";
import upload_icon from "../../Assets/images/upload_icon.png";
import {
  TextField,
  Button,
  Hidden,
  Grid,
  Typography,
  Input,
} from "@mui/material";
import {JoinAsDriver_Section_heading_Styles,JoinAsDriver_Section_text_Styles,JoinAsDriver_Section_upload_text_Styles,JoinAsDriver_Section_file_text_Styles,JoinAsDriver_Section_upload_icon_style} from "../../utils/Contants"

const JoinAsDriver_Section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    additionalInfo: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState("");
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (e) => {
    if (selectedFile) {
      const files = e.target.files;
      if (files) {
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target && event.target.result) {
              const result = event.target.result;
              imagesArray.push(result);
              if (imagesArray.length === files.length) {
                setUrl(imagesArray[0]);
              }
            }
          };
          reader.readAsDataURL(files[i]);
        }
      }
    } else {
      console.log("No file selected.");
    }
  };

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
      formDataWithFile.append("contactNo", formData.contactNo);
      formDataWithFile.append("city", formData.city);
      formDataWithFile.append("additionalInfo", formData.additionalInfo);
      formDataWithFile.append("resume", selectedFile);
      console.log("Form submitted:", formDataWithFile);
  
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
              gap: { xs: "9px", lg: "85px" },
            }}
          >
            <Hidden smDown>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img
                  src={joinDriver}
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
                <Typography sx={JoinAsDriver_Section_heading_Styles}>
                  Join as Driver partner
                </Typography>
                <Typography sx={JoinAsDriver_Section_text_Styles}>
                  {" "}
                  At DriverShaab, we provide PAN India level B2B services to
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
                      gap: "27px",
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
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: "30px 0px",
                    }}
                  >
                    <Typography sx={JoinAsDriver_Section_upload_text_Styles}>
                      Upload resume
                      <img
                        src={upload_icon}
                        alt="icon"
                        style={JoinAsDriver_Section_upload_icon_style}
                        onClick={handleUpload}
                      />
                    </Typography>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <label htmlFor="file-upload">
                        <Button
                          component="span"
                          variant="contained"
                          style={{
                            width: "105px",
                            height: "31px",
                            borderRadius: "30px",
                            border: "1px solid #FB561E",
                            color: "#121212",
                            backgroundColor: "#e7ae9f",
                            marginRight: "5px",
                          }}
                        >
                          Choose File
                        </Button>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <Typography sx={JoinAsDriver_Section_file_text_Styles}>
                        {selectedFile
                          ? `Selected File: ${selectedFile.name}`
                          : "No file chosen."}
                      </Typography>
                    </Grid>
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
                      marginTop: "16px",
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

export default JoinAsDriver_Section;
