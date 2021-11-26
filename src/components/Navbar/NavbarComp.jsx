import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router';

const SubNav=styled.div`
    display:flex;
    width:${props => props.width};
    flex-direction:${props => props.flexDirection};
    justify-content:${props => props.justifyContent};
    padding:10px 25px;
    align-items:center;
    position: relative;
    @media(max-width:576px){
        &{
            display:none;
        }
    }
    &>div{
        cursor: pointer;
    }
`;

const imageStyle = {
    height:"20px",
    cursor:"pointer",
}

function NavbarComp(props) {
    const navigate = useNavigate();
  
    return (
        <SubNav width={props.width} flexDirection={props.flexDirection} justifyContent={props.justifyContent}>
            <div>{props.firstIcon}</div>
            <div>{props.secondIcon}</div>
            <div>{props.thirdIcon}</div>
            <div>{props.fourthIcon}</div>
            <div>{props.tool}</div> 
            <img src={props.image} style={imageStyle} alt="" onClick={()=>navigate('/')}/>
        </SubNav>
    )
}

export default NavbarComp
