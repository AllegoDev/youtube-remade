import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../../redux/actions/comments.action";
import SingleComment from "./Comment";
import Comment from "./Comment";
import styled from "styled-components";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
const CommentButton = styled.button`
    background-color:#6e6e6e;
    color:white;
    width:100%;
    margin-bottom:10px;
    border:none;
    border-radius:10px;
    cursor: pointer;
    display:flex;
    align-items:center;
    white-space:nowrap;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content:center;

    &:hover{
        background-color:#444444;
        
    }
    & > h4{
        font-size:18px;
        line-height:48px;
        font-weight:400;
        width:60%;
        margin-right:20px;
    }


`;

function Comments({ video,videoId }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);


  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  return (
    <div>
      <CommentButton onClick={() => setShow(prevShow => !prevShow)}><h4>Show/Hide Comments ({video?.statistics?.commentCount})</h4> <ArrowDropDownCircleOutlinedIcon sx={{ fontSize: 30,marginLeft:2 }}/> </CommentButton>
      {show ? ( <div>
        {" "}
        {_comments?.map((comment, i) => (
          <SingleComment comment={comment} key={i} />
        ))}
      </div>) : (" ")}
     
    </div>
  );
}

export default Comments;
