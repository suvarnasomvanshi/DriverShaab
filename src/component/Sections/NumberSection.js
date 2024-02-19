import React from "react";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { CountUp } from 'use-count-up';
import {numberSection_container_styles,numberSection_wrapper_Styles,numberSection_number_Styles,numberSection_text_Styles} from "../../utils/Contants"
const NumberSection = () => {


  return (
    <Box sx={{display:'flex', justifyContent:'center', bgcolor:'#f1f1f1',py:3}}  position={'relative'} zIndex={2}>
    <Grid container sx={numberSection_container_styles} maxWidth={'1400px'}>
      <Grid item xs={6} md={2.25} sx={numberSection_wrapper_Styles}>
        <Grid item  sx={numberSection_number_Styles}><CountUp isCounting end={1600} duration={6} />+</Grid>
        <Grid item sx={numberSection_text_Styles}>Driver Partners</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={numberSection_wrapper_Styles}>
        <Grid item sx={numberSection_number_Styles}><CountUp isCounting end={16} duration={10} />K+</Grid>
        <Grid item sx={numberSection_text_Styles}>Trips covered</Grid>
      </Grid>
      <Grid item xs={12} md={2.25}  sx={numberSection_wrapper_Styles}>
        <Grid item sx={numberSection_number_Styles}><CountUp isCounting end={1600} duration={6} />+</Grid>
        <Grid item sx={numberSection_text_Styles}>Happy Customers</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={numberSection_wrapper_Styles}>
        <Grid item sx={numberSection_number_Styles}><CountUp isCounting end={7} duration={12} /></Grid>
        <Grid item sx={numberSection_text_Styles}>Cities Covered</Grid>
      </Grid>
      <Grid item xs={6} md={3} sx={numberSection_wrapper_Styles}>
        <Grid item sx={numberSection_number_Styles}><CountUp isCounting end={48} duration={9} />K Km's</Grid>
        <Grid item sx={numberSection_text_Styles}>Distance Travelled</Grid>
      </Grid>
    </Grid>
    </Box>
  );
};

export default NumberSection;

