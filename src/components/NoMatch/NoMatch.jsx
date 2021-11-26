import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router";

const Body = styled.div`
  background: rgb(240, 198, 52);
  background: linear-gradient(
    335deg,
    rgba(240, 198, 52, 1) 0%,
    rgba(239, 64, 86, 1) 60%,
    rgba(53, 79, 119, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  color:white;
`;

const Container = styled.div`
  max-width: 850px;
  height: 350px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const Headline = styled.h1`
font-size:96px;
width:100%;
margin-bottom:5px;
@media(max-width:576px){
    & {
        font-size:42px;
        width:96%;
        margin-left:2%;
    }
}
@media(min-width:576px) and (max-width:992px){
    & {
        font-size:86px;
        width:96%;
        margin-left:2%;
    }
}
`;

const Text=styled.h3`
width:90%;
margin-left:5%;
font-weight:500;
text-align:center;
margin-bottom:30px;
@media(max-width:576px){
    & {
        font-size:18px;
        font-weight:400;
        width:84%;
        margin-left:8%;
    }
}
@media(min-width:576px) and (max-width:992px){
    & {
        font-size:18px;
        font-weight:400;
        width:84%;
        margin-left:8%;
    }
}
`;

const Button=styled.button`
    cursor: pointer;
    padding:10px 20px;
    font-size:24px;
    width:20%;
    margin-left: 40%;
    background-color:transparent;
    border:1px solid white;
    border-radius:5px;
    color:white;
    @media(max-width:576px){
    & {
        font-size:18px;
        font-weight:400;
        width:70%;
        margin-left:15%;
    }
}

`

function NoMatch() {

  const navigate = useNavigate();
  return (
  <Body>
      <Container>
          <Headline>OOPS! ERROR 404</Headline>
            <Text>You have some troubles. The Web page you're looking for does not exist make sure you've typed the page may have moved or try searching website.</Text> 
            <Button onClick={()=>navigate('/')}>Go Home</Button>
      </Container>
    </Body>
)
}

export default NoMatch;
