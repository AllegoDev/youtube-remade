import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import {
  close,
  open,
  selectsidebarPosition,
} from "../../redux/reducers/sidebarPosition.reducer.js";
import { useNavigate } from "react-router";

import NavbarComp from "./NavbarComp";
import NavbarRespComp from "./NavbarRespComp";
import Input from "./Input";

import styled from "styled-components";

import {
  VideoCallOutlined,
  MicOutlined,
  Menu,
  AppsOutlined,
  NotificationsOutlined,
  AccountCircleOutlined,
  Logout
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";



// STYLES
const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  top: 0;
  height:6.5vh;
  padding-top:5px;
  position: fixed;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 999;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height: 5.5vh;
    }
  }
  @media (max-width: 576px) {
    & {
      height: 4.75vh;
    }
  }
`;

const iconMargin = {
  marginRight: "15px",
};

const Search = styled.form`
  width: 100%;
  background-color: #ffffff;
  border:1px solid #b1b1b1;
  position: fixed;
  z-index: 9999;
  margin-top: 10.75vh;
  height: 35px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const SearchInput = styled.input`
  left: 0;
  width: 85%;
  height: 70%;
  margin-top: 0.1%;
  background: transparent;
  outline: none;
  border: none;
  padding-top: 1%;
  padding-left: 1%;
  & {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 15%;
  border: none;
  background-color: white;
`;


function Navbar() {
  const [show, setShow] = useState(false);
  const [input, setInput] = React.useState(" ");
  const dispatch = useDispatch();
  const sidebarPosition = useSelector(selectsidebarPosition);

  const logOut = () => {
    dispatch(logout());
  };

  const sidebarPositionToggle = () => {
    if (sidebarPosition == "open") {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };
 
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  return (
    <NavBar>
      <Nav>

        <NavbarComp
          firstIcon={
            <Menu
              sx={{ fontSize: 30 }}
              sx={iconMargin}
              onClick={() => sidebarPositionToggle()}
            />
          }
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
          width="15%"
          justifyContent="flex-start"
        />

        <NavbarComp
          tool={<Input />}
          firstIcon={<MicOutlined sx={{ fontSize: 30 }} />}
          flexDirection="row-reverse"
          width="70%"
          justifyContent="center"
        />

        <NavbarComp
          firstIcon={<VideoCallOutlined sx={{ fontSize: 30 }} />}
          secondIcon={<AppsOutlined sx={{ fontSize: 30 }} />}
          thirdIcon={<NotificationsOutlined sx={{ fontSize: 30 }} />}
          fourthIcon={
            <Logout onClick={logOut} sx={{ fontSize: 30 }} />
          }
          width="15%"
          justifyContent="space-between"
        />

        <NavbarRespComp
          firstIcon={
            <SearchIcon onClick={() => setShow(prevShow => !prevShow)} sx={{ fontSize: 30 }} />
          }
          secondIcon={<AppsOutlined sx={{ fontSize: 30 }} />}
          thirdIcon={<NotificationsOutlined sx={{ fontSize: 30 }} />}
          fourthIcon={
            <Logout onClick={logOut} sx={{ fontSize: 30 }} />
          }
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
          width="15%"
          justifyContent="flex-start"
          flexDirection="row-reverse"
        />
      </Nav>
      
      {show && (
        <Search onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Search..."
            type="text"
            name=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </Search>
      )}
    </NavBar>
  );
}

export default Navbar;
