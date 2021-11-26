import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import "./VideoList.css";
import { selectsidebarPosition } from "../../redux/reducers/sidebarPosition.reducer.js";

const Videos = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 50px;
  padding: 0px 20px;
  padding-top: 50px;
  @media (max-width: 1200px) and (min-width: 767px) {
    & {
      grid-template-columns: ${(props) => props.theme.grid};
    }
  }

  @media (min-width: 1200px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1200px) {
    & {
      margin-top: 20px;
    }
  }
`;

const gridSidebarOpenLG = {
  grid: "repeat(2, 1fr)",
};

const gridSidebarClosedLG = {
  grid: "repeat(3, 1fr)",
};

function VideoList() {
  const [open, setOpen] = useState(false);
  const sidebarPosition = useSelector(selectsidebarPosition);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <InfiniteScroll
      dataLength={0}
     dataLength={20}
      next={fetchData}
      hasMore={true}
      loader={
        <div class="lds-circle">
          <div></div>
        </div>
      }
    >
      {sidebarPosition == "open" ? (
        <Videos theme={gridSidebarOpenLG}>
          {!loading &&
            videos.map((video) => <Video video={video} key={video.id} />)}
        </Videos>
      ) : (
        <Videos theme={gridSidebarClosedLG}>
          {!loading &&
            videos.map((video) => <Video video={video} key={video.id} />)}
        </Videos>
      )}
    </InfiniteScroll>
  );
}

export default VideoList;
