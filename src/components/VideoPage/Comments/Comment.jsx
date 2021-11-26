import React, { useEffect } from 'react'
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { purple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsOfVideoById } from '../../../redux/actions/comments.action';
import moment from 'moment';

const CommentsWrapper=styled.div`
    display:flex;
    padding:10px;
    margin-bottom:20px;

`;

const CommentInfoWrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

const CommenterImage = styled.img`
    height:50px;
    width:50px;
    margin-right:15px;
    border-radius:100%;
`;

const CommentDate = styled.h5`
    color:#9c9c9c;
    font-weight:400;
`;

const CommenterNameWrapper = styled.div`
    display:flex;
    align-items:center;
`
const CommenterName = styled.h3`
    margin-right:5px;

`;
const Comment=styled.h3`
    font-weight:400;
    margin-top:7.5px;
    font-size:14px;
    line-height:20px;
`;

const IconWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:150px;
    margin-top:10px;
`
const ReplyWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
`

const ReplyText = styled.h4`
    color:blue;
    margin-left:10px;
`
function SingleComment({comment}) {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay,
     } = comment
    return (
    
        <CommentsWrapper>
            {authorProfileImageUrl ? ( <CommenterImage  src={authorProfileImageUrl}/>) : ( <CommenterImage  src="https://www.dunyaatlasi.com/wp-content/uploads/2018/09/resim-tablo-nasil-okunur.jpg"/>)}
           
            <CommentInfoWrapper>
                    <CommenterNameWrapper>
                        <CommenterName> {authorDisplayName}</CommenterName>
                        <CommentDate>{moment(publishedAt).fromNow()}</CommentDate>
                    </CommenterNameWrapper>
                    <Comment>{textDisplay}</Comment>
                    <IconWrapper>
                        <ThumbUpAltOutlinedIcon fontSize="small"/>
                        <ThumbDownAltOutlinedIcon fontSize="small"/>
                        <AccountCircleIcon fontSize="small"  sx={{ color: purple[500] }}/>
                        <h4>REPLY</h4>
                    </IconWrapper>
            </CommentInfoWrapper>
          
        </CommentsWrapper>
    )
}

export default SingleComment
