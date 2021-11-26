import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import request from "../../../api";

const RelatedVideosWrapper = styled.div`
  max-width: 470px;
  height: 95px;
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  @media(max-width:576px){
      & {
        width:100%;
        flex-direction:column;
        height:100%;
      
      }
    }
    @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height:250px;
      max-width:100%;
      margin-bottom:25px;
    }
  }
`;
const RelatedVideoImageWrapper=styled.div`
  flex:0.37;
  height: 95px;
  position: relative;
  margin-right:10px;
  @media(max-width:576px){
      & {
        height:100%;
        margin-right:0;
        
      }
    }
    @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height:250px;
      width:600px;
      flex:0.5;
    }
  }
  
`
const RelatedVideoThumbnail = styled.img`
  width:100%;
  height: 100%;
  @media(max-width:576px){
      & {
        margin-bottom:10px;
        
      }
    }
 
`;
const RelatedVideoIndex = styled.div`
  flex: 0.55;
  height:95px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height:200px;
      max-width:600px;
    
   
    }
  }
`;
const RelatedVideoHeadline = styled.h4`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight:500;
`;
const RelatedVideoChannelName = styled.h4`
  font-weight: 400;
  color: #6d6d6d;
  font-size:12px;
  line-height:18px;
`;
const RelatedVideoStats = styled.h4`
  display: flex;
  font-weight: 400;
  color: #6d6d6d;
  font-size:12px;
  line-height:18px;

  & > span {
    margin-right: 5px;
  }
`;
const RelatedVideoSituation = styled.h5`
  background-color: #c2c2c2;
  color: white;
  padding: 5px;
  width: 30px;
  border-radius: 2.5px;
`;
const RelatedVideoDuration = styled.h4`
color: white;
  background-color: #2e2e2e;
  padding: 3px 4px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size:12px;
  @media(max-width:576px){
      & {
        bottom: 25px;
        right: 10px;
      }
    }


`
const ChannelImageRest=styled.img`
    width:40px;
    height:40px;
    border-radius:100%;
    margin-right:5px;
    @media(min-width:576px){
      & {
        display:none;
      }
    }
`

function RelatedVideos({ video,searchScreen }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails:{medium},
    },
  } = video;
  
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

 const navigate=useNavigate()
 const handleClick = () => {
    navigate(`/watch/${id.videoId}`)
 }

  return (
    <RelatedVideosWrapper onClick={handleClick}>
        <RelatedVideoImageWrapper>
        <RelatedVideoThumbnail src={medium.url} />
        <RelatedVideoDuration>{_duration}</RelatedVideoDuration>
        </RelatedVideoImageWrapper>
     
      <RelatedVideoIndex>
        <ChannelImageRest src={channelIcon?.url}alt="" />
        <div>
          <RelatedVideoHeadline>
          {title}
          </RelatedVideoHeadline>
          <RelatedVideoChannelName>{channelTitle}</RelatedVideoChannelName>
          <RelatedVideoStats>
            <span>{numeral(views).format("0.a")}</span>
            <span>▪</span>
            <span>{moment(publishedAt).fromNow()}</span>
          </RelatedVideoStats>
        </div>
       
        {/* <RelatedVideoSituation>New</RelatedVideoSituation> */}
      </RelatedVideoIndex>
    </RelatedVideosWrapper>
  );
}

export default RelatedVideos;
