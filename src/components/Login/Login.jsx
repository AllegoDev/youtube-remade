import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { Navigate, useNavigate } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../../images/allego3.png'
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://media.istockphoto.com/vectors/geometric-abstract-background-poster-design-simple-shapes-in-c-vector-id1190839080?k=20&m=1190839080&s=170667a&w=0&h=lEr_9pECEUtjI3L2ZYvLVxoVdUtWd9X_6yLI4N7KjRk=");
  position: absolute;
  overflow-x:hidden;
  overflow-y:hidden;
  /* https://img.freepik.com/free-vector/background-retro-bauhaus-style_73378-851.jpg?size=626&ext=jpg */
`;

const Button = styled.button`
  bottom: 20px;
  width: 90%;
  font-weight: 500;
  margin-left: 5%;
  padding: 5px 20px;
  color: #ffffff;
  border-radius: 5px;
  position: absolute;
  background: rgb(240, 198, 52);
  background: linear-gradient(
    335deg,
    rgba(240, 198, 52, 1) 0%,
    rgba(239, 64, 86, 1) 60%,
    rgba(53, 79, 119, 1) 100%
  );
  display: flex;
  align-items: center;
  cursor:pointer;
  justify-content:center;
`;
const ButtonText = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-left: 10px;
`;
const Card = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  color:black;

`;
const CardIcon = styled.div`
 position: relative;
 width:100%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-align:center;
  top: 12%;
  display:flex;
  padding-left:50%;
  color:black;
`

const CardText=styled.h4`
 position: relative;
 width:100%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-align:center;
  top: 13%;
  font-size:36px;
  color:black;
`
const CardInfoText=styled.h5`
position: relative;
 width:100%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-align:center;
  top: 15%;
  font-size:20px;
  font-weight:400;
  color:black;
`
const CardInfoWarning=styled.h5`
position: relative;
 width:90%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-align:center;
  align-items:center;
  top: 17%;
  font-size:14px;
  font-weight:400;
  color:black;
  font-size:12px;
`

const Logo = styled.img`
    width:50px;
    padding:15px;
`
function Login() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  return (
    <Background>
     
      <Card>
        <a href="https://www.linkedin.com/in/allego-dev-853375225"><CardIcon><YouTubeIcon sx={{ fontSize: "80px" ,color:"red"}}/><Logo className="logo" src={logo} alt=""/></CardIcon></a>
        <CardText>Sign Up</CardText>
        <CardInfoText>Create an account by using Google
           
        </CardInfoText>
        <CardInfoWarning> (With this application, you cannot make changes to your Youtube account linked to your Google account.)</CardInfoWarning>
        <Button onClick={handleLogin}>
          <div>
            <GoogleIcon sx={{ fontSize: 30 }} />
          </div>
          <ButtonText>Login With Google</ButtonText>
        </Button>
      </Card>
    </Background>
  );
}

export default Login;
