import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getVideoById } from "../../../redux/actions/videos.action";
import './VideoPlayer.css'


function VideoPlayer({video,videoId}) {
   
  return (
    <iframe
      className="youtube"
      title={video?.snippet?.title}
      width="100%"
      height="700"
      src={`https://www.youtube.com/embed/${videoId}`}
      
    ></iframe>
  );
}

export default VideoPlayer;
