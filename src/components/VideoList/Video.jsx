import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectsidebarPosition } from "../../redux/reducers/sidebarPosition.reducer.js";
const SingleVideo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      width: ${(props) => props.themeWidthLG.width};
    }
  }
  @media (max-width: 991px) and (min-width: 767px) {
    & {
      width: ${(props) => props.themeWidthMD.width};
    }
  }
  @media (min-width: 1200px) {
    & {
      width: 370px;
    }
  }
`;

const VideoThumbnail = styled.div`
position:relative;
  margin-bottom: 10px;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height: ${(props) => props.themeHeightLG.height};
    }
  }
  @media (max-width: 991px) and (min-width: 767px) {
    & {
      height: ${(props) => props.themeHeightMD.height};
    }
  }
  @media (min-width: 1200px) {
    & {
      height: 210px;
    }
  }
`;
const VideoImage = styled.img`


  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      width: ${(props) => props.themeWidthLG.width};
      height: ${(props) => props.themeHeightLG.height};
    }
  }

  @media (max-width: 991px) and (min-width: 767px) {
    & {
      width: ${(props) => props.themeWidthMD.width};
      height: ${(props) => props.themeHeightMD.height};
    }
  }
  @media (min-width: 1200px) {
    & {
      width: 370px;
      height: 210px;
    }
  }
  @media (max-width: 576px) {
    & {
      width:100%;
      
    }
  }
`;

const VideoIndex = styled.div`
  display: flex;
`;

const VideoInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const VideoStatistics = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 5px;
    color: #3a3a3a;
    font-size: 14px;
    line-height: 20px;
  }
`;
const VideoHeadline = styled.h4`
  text-align: initial;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 20px;
`;

const ChannelName = styled.h4`
  font-weight: 400;
  color: #3a3a3a;
  font-size: 14px;
  line-height: 20px;
`;

const VideoDuration = styled.h5`
  color: white;
  background-color: #2e2e2e;
  padding: 2px;
  width: 35px;
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

const widthVideoOpenLG = {
  width: "280px",
};

const heightVideoOpenLG = {
  height: "160px",
};

const widthVideoClosedLG = {
  width: "370px",
};

const heightVideoClosedLG = {
  height: "210px",
};

const widthVideoOpenMD = {
  width: "280px",
};

const heightVideoOpenMD = {
  height: "160px",
};

const widthVideoClosedMD = {
  width: "370px",
};

const heightVideoClosedMD = {
  height: "210px",
};


function Video({ video }) {
  const [open, setOpen] = useState(false);
  const sidebarPosition = useSelector(selectsidebarPosition);
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || contentDetails?.videoId || id;

 

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const navigate = useNavigate();

  const RedirectToVideo = () => {
    navigate(`/watch/${_videoId}`);
  };
  return (
    <div>
      {sidebarPosition == "open" ? (
        <SingleVideo
          onClick={() => RedirectToVideo()}
          themeWidthLG={widthVideoClosedLG}
          themeHeightLG={heightVideoClosedLG}
          themeWidthMD={widthVideoClosedMD}
          themeHeightMD={heightVideoClosedMD}
        >
          <VideoThumbnail 
          themeWidthLG={widthVideoClosedLG} 
          themeHeightLG={heightVideoClosedLG}
          themeWidthMD={widthVideoClosedMD} 
          themeHeightMD={heightVideoClosedMD}>
            <VideoImage
              src={medium.url}
              themeWidthLG={widthVideoClosedLG}
              themeHeightLG={heightVideoClosedLG}
              themeWidthMD={widthVideoClosedMD}
              themeHeightMD={heightVideoClosedMD}
            />
            <VideoDuration >{_duration}</VideoDuration>
          </VideoThumbnail>

          <VideoIndex>
            <ChannelImage src={channelIcon?.url} />
            <VideoInfoBlock>
              <VideoHeadline>{title}</VideoHeadline>
              <ChannelName>{channelTitle}</ChannelName>
              <VideoStatistics>
                <span>{numeral(views).format("0.a")} views</span>
                <span> ▪ </span>
                <span>{moment(publishedAt).fromNow()}</span>
              </VideoStatistics>
            </VideoInfoBlock>
          </VideoIndex>
        </SingleVideo>
      ) : (
        <SingleVideo
          onClick={() => RedirectToVideo()}
          themeWidthLG={widthVideoOpenLG}
          themeHeightLG={heightVideoOpenLG}
          themeWidthMD={widthVideoOpenMD}
          themeHeightMD={heightVideoOpenMD}
        >
          <VideoThumbnail 
          themeWidthLG={widthVideoOpenLG} 
          themeHeightLG={heightVideoOpenLG}
          themeWidthMD={widthVideoOpenMD} 
          themeHeightMD={heightVideoOpenMD}>
            <VideoImage
              src={medium.url}
              themeWidthLG={widthVideoOpenLG}
              themeHeightLG={heightVideoOpenLG}
              themeWidthMD={widthVideoOpenMD}
              themeHeightMD={heightVideoOpenMD}
            />
            <VideoDuration>{_duration}</VideoDuration>
          </VideoThumbnail>

          <VideoIndex>
            <ChannelImage src={channelIcon?.url} />
            <VideoInfoBlock>
              <VideoHeadline>{title}</VideoHeadline>
              <ChannelName>{channelTitle}</ChannelName>
              <VideoStatistics>
                <span>{numeral(views).format("0.a")} views</span>
                <span> ▪ </span>
                <span>{moment(publishedAt).fromNow()}</span>
              </VideoStatistics>
            </VideoInfoBlock>
          </VideoIndex>
        </SingleVideo>
      )}
    </div>
  );
}

export default Video;
