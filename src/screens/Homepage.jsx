import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Categories from "../components/Categories/Categories";
import VideoList from "../components/VideoList/VideoList";
import { useSelector } from "react-redux";
import { selectsidebarPosition } from "../redux/reducers/sidebarPosition.reducer.js";
import Input from "../components/Navbar/Input";
const Body = styled.div`
  display: flex;
  margin-top: 70px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const MainBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  float: right;
  @media (max-width: 1200px) and (min-width: 576px) {
    & {
      flex: ${(props) => props.theme.flex};
    }
  }
  @media (min-width: 1200px) {
    & {
      flex: 1.2;
    }
  }
  background-color: #f5f5f5;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 576px) {
    & {
      margin-top: -30px;
    }
  }
`;

const MainBodyLeft = styled.div`
  height: 100vh;
  float: left;
  flex: ${(props) => props.theme.flex};
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      flex: ${(props) => props.themes.flex};
    }
  }
`;

const sidebarOpenXL = {
  flex: 0.16,
};

const sidebarOpenLG = {
  flex: 0.055,
  padding: "10px",
};

const sidebarClosedXL = {
  flex: 0.22,
};

const sidebarClosedLG = {
  flex: 0.075,
  padding: "10px",
};

const bodyClosedLG = {
  flex: 0.9,
};

const bodyOpenLG = {
  flex: 0.8,
};

function Homepage() {
  const [open, setOpen] = useState(false);
  const sidebarPosition = useSelector(selectsidebarPosition);

  return (
    <div>
      <Navbar />

      <Body>
        {sidebarPosition == "open" ? (
          <MainBodyLeft theme={sidebarOpenXL} themes={sidebarClosedXL}>
            <Sidebar />
          </MainBodyLeft>
        ) : (
          <MainBodyLeft theme={sidebarOpenLG} themes={sidebarClosedLG}>
            <Sidebar />
          </MainBodyLeft>
        )}

        {sidebarPosition == "open" ? (
          <MainBodyRight theme={bodyOpenLG}>
            <Categories />
            <VideoList />
          </MainBodyRight>
        ) : (
          <MainBodyRight theme={bodyClosedLG}>
            <Categories />
            <VideoList />
          </MainBodyRight>
        )}
      </Body>
    </div>
  );
}

export default Homepage;
