import React from 'react';
import { useMediaQuery,Typography } from '@mui/material';
import line from "../Assets/images/line.png";

const Vertical_Text = ({text,color}) => {
    const isDesktop = useMediaQuery("(min-width:900px)");
  return (
    <>
    {isDesktop ? (
        <div
    sytle={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
    }}
  >
    <Typography
      sx={{
        writingMode: "vertical-rl",
        color: color,
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "27px",
        textAlign: "center",
        marginTop: "70px",
      }}
    >
    {text}
    </Typography>
    <img
      src={line}
      alt="line"
      style={{ marginLeft: "12px", marginTop: "10px" }}
    />
  </div>
    ) :(
        <div container xs={12} sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
          <Typography sx={{color:color, fontFamily:"Inter",fontWeight:"700",fontSize:'18px',lineHeight:'27px',textAlign:'center'
          }}>{text}  <img src={line} alt="lineimg" style={{ height: "52px",transform: "rotate(90deg)",marginLeft:"45px"}} /></Typography>
        
          </div>
    )}
    
  </>
  )
}

export default Vertical_Text
