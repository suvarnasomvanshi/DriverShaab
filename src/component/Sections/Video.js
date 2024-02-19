import React from "react";
import YoutubeVideo from "../../Assets/images/YoutubeVideo.png";
// import video from "./assets/video.mp4";
import ReactPlayer from "react-player";
import { Grid, Typography } from "@mui/material";
import { video_heading,video_container_styles} from "../../utils/Contants";
import Vertical_Text from "../Vertical_Text";

// const Video = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         // alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         sytle={{
//           display: "flex",
//           alignItems: "start",
//           justifyContent: "center",
//           margin: "opx 20px",

//         }}
//       >
//         <Typography
//           sx={{
//             writingMode: "vertical-rl",
//             color: "#C5C5C5",
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: "18px",
//             lineHeight: "27px",
//             textAlign: "center",
//           }}
//         >
//           Demo{" "}
//         </Typography>
//         <img src={line} alt="line" style={{ marginLeft: "12px",marginTop:"10px"}} />
//       </div>

//       <div
//         style={{
//           margin: "auto",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ height: "113px", width: "100%" }}>
//           <p
//             style={{
//               fontWeight: "500",
//               fontFamily: "Inter",
//               fontSize: "32px",
//               lineHeight: "38.4px",
//               textAlign: "center",
//               textTransform:"uppercase"
//             }}
//           >
//             How Businesses can use Drivershaab app
//           </p>
//         </div>
        // <img
        //   src={YoutubeVideo}
        //   alt="videoimg"
        //   style={{ width: "90%", borderRadius: "2px", margin: "0 5%" }}
        // />

//    <ReactPlayer
//  light={true}
//  controls={true}
// //  url={'https//www.htyjjhfyjhukgjtijhk,uuuuuuuyukhu'} link
//  url={video}
//  height="100%"
//  width="90%"
//  />
//       </div>
//     </div>
//   );
// };

// export default Video;



const Video = () => {

  return (
    <div>
      <Grid container sx={video_container_styles}>
        <Grid
          item
          md={1}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Vertical_Text color={"#F0F0F0"} text={"Demo"} />
        </Grid>
        <Grid item md={11} xs={12}>
        <Grid>
          <Typography sx={video_heading}>
            How Businesses can use Drivershaab app
          </Typography>
        </Grid>
        <Grid>

        <img
          src={YoutubeVideo}
          alt="videoimg"
          style={{ width: "90%", borderRadius: "2px", margin: "0 5%" }}
        />
          {/* <ReactPlayer 
       light={true}
       controls={true}
      //  url={'https//www.htyjjhfyjhukgjtijhk,uuuuuuuyukhu'} link
       url={video}  
       height="100%"  
       width="90%" 
       />  */}
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Video;
