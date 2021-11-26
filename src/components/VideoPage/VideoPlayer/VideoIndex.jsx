import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import moment from 'moment';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from '../../../redux/actions/channel.action';


const VideoIndexWrapper=styled.div`
    display:flex;
    width:100%;
    border-bottom:1px solid #d1d1d1;
    @media(max-width:576px){
      & {
        padding:5px;
        width:90%;
      }
    }
`;

const VideoIndexRight=styled.div`
    display:flex;
    right:0;
    position:relative;
    height:15vh;
    align-items:flex-end;
`;

const VideoIcons=styled.div`
    display:flex;
    padding:15px;
    
    &>div{
        display:flex;
        align-items:center;
        margin-right:25px;    
        text-align:center;
   
    }
    &>div>h4{
        margin-left:7.5px;
        line-height:36px;
        font-weight:500;
    }
    @media(max-width:576px){
      & {
        padding:5px;
        width:90%;
      }
    }
    @media(max-width:576px){
      & > div{
        margin-right:20px;
      }
    }
`;



const VideoIndexLeft=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    
    
    
`;

const VideoTags=styled.h5`
    color:#065fd4;
    font-size:15px;
    line-height:20px;
    font-weight:500;
    margin-top:10px;
`;

const VideoHeadline=styled.h2`
    font-size:18px;
    line-height:26px;
    font-weight:400;
`;

const VideoStats=styled.h4`
    display:flex;
    margin-top:5px;
    justify-content:space-between;

    &>div>span{
        margin-right:5px;
        font-weight:400;
        font-size:14px;
        line-height:20px;
        color: #606060
    }
    @media (max-width: 576px) {
    & {
      flex-direction:column;
    }
  }
`;

const IconText = styled.h4`
    font-size:14px;
    font-weight:500;
`

function VideoIndex({video: { snippet:snippet, statistics:statistics }, videoId }) {

    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics
   
    return (
        <VideoIndexWrapper>
            <VideoIndexLeft>
                <VideoTags>#heyooo #beşiktaş #süperlig</VideoTags>
                <VideoHeadline>{title}</VideoHeadline>
                <VideoStats>
                    <div>
                        <span>{numeral(`${viewCount}`).format('0.0aM')}</span>◾<span></span><span>{moment(`${publishedAt}`).format("MMM DD,YYYY")}</span>
                    </div> 
                    <VideoIcons>
                    <div>
                        <ThumbUpAltOutlinedIcon sx={{ fontSize: 30}}/>
                        <IconText>{numeral(`${likeCount}`).format('0.0a')}</IconText> 
                    </div>
                    <div>
                        <ThumbDownAltOutlinedIcon sx={{ fontSize: 30}} style={{marginTop:"10px"}}/>
                        <IconText>{numeral(`${dislikeCount}`).format('0.0a')}</IconText> 
                    </div>
                    <div>
                        <IosShareOutlinedIcon  sx={{ fontSize: 30}}/>
                        <IconText>Share</IconText>
                    </div>
                    <div>
                        <SaveAltOutlinedIcon  sx={{ fontSize: 30}}/>
                        <IconText>Save</IconText>
                    </div>
                </VideoIcons>
                </VideoStats> 
            </VideoIndexLeft>
            <VideoIndexRight>
                
            </VideoIndexRight>
            <VideoIndexRight></VideoIndexRight>
        </VideoIndexWrapper>
    )
}

export default VideoIndex
