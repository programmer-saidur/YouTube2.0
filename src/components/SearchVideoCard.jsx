import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl,  demoChannelUrl, demoChannelTitle } from "../utils/constants";

const SearchVideoCard = ({ video: { id: { videoId }, snippet } }) => {
  var currentDate = new Date().toISOString();

  const date2 = snippet?.publishTime
  
  const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000
  
  const diffInMilliseconds = new Date(currentDate).getTime() - new Date(date2).getTime()
  const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS
  return(
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
  <div  className="card-glass w-[60vw]  cursor-pointer flex bg-[#202020] backdrop-blur-2xl ">
     
      <img className='h-60' src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}  />
   
    
    <CardContent sx={{  height: '130px' }} className="">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
         { snippet?.title}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
         {" "}・{" "}{
            Math.round(diffInDays) < 1 ?
             "Today"  :  Math.round(diffInDays) === 1 ? "Yesterday" :Math.round(diffInDays) < 29 ? Math.round(diffInDays) + " Days ago" :Math.round(diffInDays) < 365 ? Math.round(Math.round(diffInDays) / 30) + ` ${Math.round(Math.round(diffInDays) / 30) <= 1 ? " Month" : " Months"} ago` :Math.round(diffInDays) > 365 ? Math.round(Math.round(diffInDays) / 365) + `${Math.round(Math.round(diffInDays) / 365) <= 1 ? " Year" : " Years"}  ago` :
             ""
          } 
        </Typography>
      </Link>
    </CardContent>
  </div>
  </Link>
)};

export default SearchVideoCard