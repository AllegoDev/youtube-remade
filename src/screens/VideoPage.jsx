import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import VideoPlayer from "../components/VideoPage/VideoPlayer/VideoPlayer";
import VideoIndex from "../components/VideoPage/VideoPlayer/VideoIndex";
import RelatedVideos from "../components/VideoPage/Related Videos/RelatedVideos";
import VideoSubscribe from "../components/VideoPage/VideoPlayer/VideoSubscribe";
import AddComment from "../components/VideoPage/Comments/AddComment";
import Comments from "../components/VideoPage/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRelatedVideos, getVideoById } from "../redux/actions/videos.action";

const VideoPageWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    & {
      flex-direction:column;
    }
  }
  @media (min-width: 1200px) {
    & {
      flex-direction:row;
    }
  }
  width: 100%;
  position: relative;
  margin-top: 70px;
  @media (max-width: 576px) {
    & {
      margin-top:0;
    }
  }
  height: 100%;
  z-index: 99;
  background-color: #eeeeee;
  
`;

const VideoPageLeft = styled.div`
  flex: 1;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      padding:20px;
    }
  }
  @media (min-width: 1200px) {
    & {
      padding: 2.5vh 20px 2.5vh 90px;
    }
  }

`;

const NavbarShow = styled.div`
@media (max-width: 576px) {
    & {
      display:none;
    }
  }

`
const VideoPageRight = styled.div`
  flex: 0.45;
  padding: 2.5vh 20px 2.5vh 20px;
  @media (max-width: 576px) {
    & {
      padding: 0;
    }
  }
`;

function VideoPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id))
  }, [dispatch, id]);
  

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const {videos,loading:relatedVideosLoading} = useSelector((state)=> state.relatedVideos);
  return (
    <div>
      <NavbarShow>
          <Navbar />
      </NavbarShow>
     
      <VideoPageWrapper>
        <VideoPageLeft>
          <VideoPlayer video={video} videoId={id} />
          {!loading ? (
            <VideoIndex video={video} videoId={id} />
          ) : (
            <h6>Loading...</h6>
          )}

        {!loading ? (
            <VideoSubscribe video={video} videoId={id} />
          ) : (
            <h6>Loading...</h6>
          )}
          <AddComment video={video} videoId={id} />
          <Comments  video={video}  videoId={id} />
   
        </VideoPageLeft>
        <VideoPageRight>
          {!loading && videos?.filter(video=>video.snippet)
          .map(video=>
             <RelatedVideos video={video} key={video.id.videoId} />
          )}
       
         
        </VideoPageRight>
      </VideoPageWrapper>
    </div>
  );
}

export default VideoPage;
