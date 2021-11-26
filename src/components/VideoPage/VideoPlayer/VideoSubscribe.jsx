import React, { useEffect } from "react";
import styled from "styled-components";
import ReactShowMoreText from "react-show-more-text";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../../redux/actions/channel.action";

const VideoSubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid #d1d1d1;
  @media (max-width: 576px) {
    & {
      padding:10px;
    }
  }
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
`;
const VideoSubscribeText = styled.h3`
  margin-top: 20px;
  font-weight: 400;
  padding: 0 70px;
  width: 70%;
  font-size:14px;
  line-height:20px;
`;

const ChannelImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  
`;

const ChannelImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-right: 10px;
`;

const ChannelNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space:nowrap;
`;

const ChannelName = styled.h3``;

const ChannelSubscribers = styled.h4`
  color: grey;
  font-weight: 400;
`;

const SubscribeButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background-color: #c20e0e;
  border: none;
  margin-right: 25px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  @media(max-width:576px){
      & {
        font-size: 16px;
        padding: 5px 10px;
        
      }
    }
`;
const SubscribeButtons = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background-color: #ffe600;
  border: none;
  margin-right: 25px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;

`;

function VideoSubscribe({
  video: { snippet: snippet, statistics: statistics },
  videoId,
}) {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);


    useEffect(() => {
      dispatch(getChannelDetails(channelId))
     
   }, [dispatch, channelId])
  return (
    <VideoSubscribeWrapper>
      <ChannelInfo>
        <ChannelImageWrapper>
          <ChannelImage src={channelSnippet?.thumbnails?.default?.url}/>
          <ChannelNameWrapper>
            <ChannelName>{channelTitle}</ChannelName>
            <ChannelSubscribers>
              {numeral(`${channelStatistics?.subscriberCount}`).format("0.a")}
            </ChannelSubscribers>
          </ChannelNameWrapper>
        </ChannelImageWrapper>
        <SubscribeButton>SUBSCRIBE</SubscribeButton>
      </ChannelInfo>
      <VideoSubscribeText>
        <ReactShowMoreText
          line={3}
          more="Show More"
          less="Show Less"
          anchorClass="ReactShowMoreText"
          expanded={false}
        >
          {description}
        </ReactShowMoreText>
      </VideoSubscribeText>
    </VideoSubscribeWrapper>
  );
}

export default VideoSubscribe;
