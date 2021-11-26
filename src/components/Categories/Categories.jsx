import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const CategoryList = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 99;
  background-color: white;
  overflow-x: scroll;
  align-items:center;

  ::-webkit-scrollbar {
    display: none;
  }
  @media(max-width:576px){
    & { 
      height:50px;
    }
  }
`;

const Categorys = styled.div`
  display: flex;
  position: absolute;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  padding-left: 15px;
  align-items:center;
  line-height:16px;
`;

const Category = styled.h3`
  padding: 7.5px 25px;
  border: 1px solid #d4d4d4;
  margin: 10px 4px;
  font-weight: 400;
  white-space: nowrap;
  border-radius: 25px;
  background-color: #ececec;
  transition: 0.4s all;
  cursor: pointer;
  font-size:14px;
  line-height:20px;
  @media (max-width: 576px) {
    & {
      padding: 5px 15px;
      font-size: 12px;
    }
  }
  &:hover {
    background-color: #d3d3d3;
  }
`;

const Explore = styled.div`
  display:flex;
  align-items:center;
  background-color:#e6e6e6;
  padding:5px;
  margin-right:5px;
  & > h4 {
    font-size:15px;
    margin-right:5px;
    font-weight:500;
  }
  border-radius:5px;

  @media(min-width:576px){
    & {
      display:none;
    }
  }
`;

const Line=styled.h4`
  font-size:30px;
  padding-bottom:7.5px;
  @media(min-width:576px){
    & {
      display:none;
    }
 
  }
`

const keywords = [
  "All",
 'Blockchain',
  'React JS',
  'React Natİve',
  'Svelte JS',
  'Redux',
  'Cryptocurrency',
  'Next JS ',
  'Boston Celtics',
  'Coding',
  'Angular JS',
  'Real Madrid',
  'Gatsby JS',
  'CSS',
  'Javascript',
  'Vue JS',
  'CSS',
  'Javascript',
  'Vue JS',
];

function Categories() {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <CategoryList>
      <Categorys>
        <Explore>
          <ExploreOutlinedIcon sx={{ fontSize: 22}}/>
          <h4>Explore</h4></Explore>
          <Line>|</Line>
        {keywords.map((value, i) => (
          <Category
            onClick={() => handleClick(value)}
            key={i}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </Category>
        ))}
      </Categorys>
    </CategoryList>
  );
}

export default Categories;
