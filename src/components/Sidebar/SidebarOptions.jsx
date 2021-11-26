import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { selectsidebarPosition } from "../../redux/reducers/sidebarPosition.reducer.js";

const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.background};
  cursor:pointer; 
`;

const SidebarOptionIcon = styled.h3`
  font-weight: 500;
`;

const SidebarOptionTag = styled.h3`
  font-weight: 450;
  margin-right: 60px;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
`;

const SidebarImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin:7.5px 20px;
`;

function SidebarOptions(props) {
  const sidebarPosition = useSelector(selectsidebarPosition);

  return (
    <SidebarOption background={props.background}>
      {props.img && <SidebarImage src={props.img}></SidebarImage>}
      <SidebarOptionIcon>{props.icon}</SidebarOptionIcon>
      {sidebarPosition == "open" && (
        <SidebarOptionTag>{props.tag}</SidebarOptionTag>
      )}
    </SidebarOption>
  );
}

export default SidebarOptions;
