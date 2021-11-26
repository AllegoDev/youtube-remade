import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Input from './Input'

const NavbarResp = styled.div`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  padding: 10px 25px;
  align-items: center;
  position: relative;
  justify-content:space-between;
  width:100%;
  @media (min-width: 576px) {
    & {
      display: none;
    }
  }
  & > div{
      display:flex;
  }
`;

const imageStyle = {
  height: "20px",
  cursor: "pointer",
};


function NavbarRespComp(props) {
  const navigate = useNavigate();
  return (
    <NavbarResp>
      <img src={props.image} style={imageStyle} alt="" onClick={()=>navigate('/')}/>
      <div>
        <div>{props.firstIcon}</div>
        <div>{props.secondIcon}</div>
        <div>{props.thirdIcon}</div>
        <div>{props.fourthIcon}</div>
        <div>{props.tool}</div>
      </div>
    </NavbarResp>
  );
}

export default NavbarRespComp;
