import React, { useState } from 'react'
import styled from "styled-components";
import SidebarOptions from './SidebarOptions';

import { useSelector } from 'react-redux';
import { selectsidebarPosition } from '../../redux/reducers/sidebarPosition.reducer.js';
import {Home,Explore,VideoLibraryOutlined,SubscriptionsOutlined,AlbumOutlined,OndemandVideoOutlined,RestoreOutlined,PlayCircleOutlined,AccessTimeOutlined,ThumbUpOutlined,
    SportsEsportsOutlined,PodcastsOutlined,SportsSoccerOutlined,SettingsOutlined,FlagOutlined,HelpOutlineOutlined,FeedbackOutlined,ExploreOutlined, YoutubeSearchedForOutlined} from '@mui/icons-material';





const SideNav = styled.div`
    height:100%;
    position:fixed;
    background-color:white;
    overflow-y:scroll;
    z-index:9999;
    ::-webkit-scrollbar{
    display:none;
    background-color: white;

    }
    @media(max-width:576px){
        & {
            display:none;
            background-color:pink;
        }
    }
    &:hover{
        ::-webkit-scrollbar{
            display:flex;
        }
    }

`;

const SidebarBlock = styled.div `
    border-bottom:1px solid #d4d4d4;
    padding:7.5px 0;
`;

const IconStyle={
    fontSize:30,
    margin:"5px 20px" 
}

function Sidebar() {
    const [open,setOpen]=useState(false);
    const sidebarPosition = useSelector(selectsidebarPosition);
    return (
        <SideNav className='invisible-scrollbar'>
            <SidebarBlock>
                <SidebarOptions icon={<Home sx={IconStyle}/>}  tag="Home" background="#d8d8d8"/>
                <SidebarOptions icon={<ExploreOutlined sx={IconStyle}/>}  tag="Explore"/>
                <SidebarOptions icon={<SubscriptionsOutlined sx={IconStyle}/>}  tag="Subscriptions"/>
                <SidebarOptions icon={<OndemandVideoOutlined sx={IconStyle}/>}  tag="Originals"/>
                <SidebarOptions icon={<AlbumOutlined sx={IconStyle}/>}  tag="Youtube Music"/>
            </SidebarBlock>
            <SidebarBlock>
                <SidebarOptions icon={<VideoLibraryOutlined  sx={IconStyle}/>}  tag="Library"/>
                <SidebarOptions icon={<RestoreOutlined sx={IconStyle}/>}  tag="History"/>
                <SidebarOptions icon={<PlayCircleOutlined sx={IconStyle}/>}  tag="Your Videos"/>
                <SidebarOptions icon={<AccessTimeOutlined sx={IconStyle}/>}  tag="Watch Later"/>
                <SidebarOptions icon={<ThumbUpOutlined sx={IconStyle}/>}  tag="Liked Videos"/>
            </SidebarBlock>
            <SidebarBlock>
               
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLRwxGKnX92LLjwG5rN41KPbxIK4f5C-ghIDhHfy=s88-c-k-c0x00ffffff-no-rj" tag= "Dapp University"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s88-c-k-c0x00ffffff-no-rj" tag= "freeCodeCamp"/> 
                <SidebarOptions img="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s88-c-k-c0x00ffffff-no-rj" tag= "Sonny Sangha"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s88-c-k-c0x00ffffff-no-rj" tag= "JSConf"/> 
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLTh3o5-VnEQd-TGLDFXioMDDJ20GAGx0xKoG4L5Kw=s88-c-k-c0x00ffffff-no-rj" tag= "Karl Hadwen"/>
                <SidebarOptions img="https://yt3.ggpht.com/ytc/AKedOLQ-aB06HhhA8J0VN0zd6hU-BTtcxtfm3D-cFarGLg=s88-c-k-c0x00ffffff-no-rj" tag= "Design Sense"/>
               
            </SidebarBlock>
            <SidebarBlock>
                <SidebarOptions icon={<SportsEsportsOutlined sx={IconStyle}/>}  tag="Gaming"/>
                <SidebarOptions icon={<PodcastsOutlined sx={IconStyle}/>}  tag="Live"/>
                <SidebarOptions icon={<SportsSoccerOutlined sx={IconStyle}/>}  tag="Sport"/>
            </SidebarBlock>
            <SidebarBlock>
                <SidebarOptions icon={<SettingsOutlined  sx={IconStyle}/>}  tag="Settings"/>
                <SidebarOptions icon={<FlagOutlined sx={IconStyle}/>}  tag="Report History"/>
                <SidebarOptions icon={<HelpOutlineOutlined sx={IconStyle}/>}  tag="Help"/>
                <SidebarOptions icon={<FeedbackOutlined sx={IconStyle}/>}  tag="Send Feedback"/>
                <SidebarOptions icon={<FeedbackOutlined sx={IconStyle}/>}  tag="Send Feedback"/>
            </SidebarBlock>
    
        </SideNav>
    )
}

export default Sidebar
