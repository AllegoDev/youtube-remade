import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addComment } from "../../../redux/actions/comments.action";

const AddCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  @media (max-width: 1200px) {
    & {
      flex-direction:column;
    }
  }
`;
const AddCommentBlock = styled.div`
  display: flex;
  align-items: center;

`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 10px;
`;
const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TextArea = styled.input`
  padding-top: 10px;
  background: none;
  border: none;
  border-bottom: 2px solid #a5a5a5;
  width: 100%;
  font-size: 18px;
  transition: all 0.4s;
  @media(max-width:576px){
      & {
        width: 90%;
      }
    }
  &:focus {
    outline: none;
    border-bottom: 2px solid #141414;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      position:absolute;
      right:0;
    }
  }
  
`;
const CancelButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  color: #3d3d3d;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      right:20px;
      margin-right:0;
    }
  }
`;
const CommentButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  color: #808080;
  position: relative;
  background-color: #e7e7e7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  right:0;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      right:20px;
      margin-right:0;
    }
  }
`;

const CommentNumber = styled.h3`
  font-weight: 400;
  margin-bottom: 10px;
  padding-left: 10px;
`;
export default function AddComment({ video, videoId, totalComments }) {
  

  const [showButton, setShowButton] = React.useState(true);

 
  return (
    <AddCommentWrapper>
      <CommentNumber>{video?.statistics?.commentCount} Comment</CommentNumber>
    
        <AddCommentBlock>
          <ProfileImage src="https://www.dunyaatlasi.com/wp-content/uploads/2018/09/resim-tablo-nasil-okunur.jpg" />

          <TextAreaWrapper>
            <TextArea
              type="text"
           
              onClick={() => setShowButton(true)}
              placeholder="Add public comment..."
          
            ></TextArea>
            {showButton && (
              <ButtonWrapper>
                <CancelButton onClick={() => setShowButton(false)}>
                  CANCEL
                </CancelButton>
                <CommentButton>COMMENT</CommentButton>
              </ButtonWrapper>
            )}
          </TextAreaWrapper>
        </AddCommentBlock>
   
    </AddCommentWrapper>
  );
}
