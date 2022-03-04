import { Container, VideoContainer, BottomContainer, ChannelLogoContainer, TextContainer } from './styles'
import React, { FC } from "react";
import { MdMoreVert } from "react-icons/md";
export default function VideoDisplay({video}) {
    var views:String, time:String
    if (video.views >= 1000000000){
        views = String(video.views)[0] + ',' + String(video.views)[1] + ' bi'
    }else if(video.views >= 1000000){
        views = String(video.views)[0] + ',' + String(video.views)[1] + ' mi'
    }else if(video.views >= 100000){
        views = String(video.views)[0] + String(video.views)[1] + String(video.views)[2] + ' mil'
    }else if(video.views >= 1000){
        views = String(video.views)[0] + ',' + String(video.views)[2] + ' mil'
    }else{
        views = String(video.views)[0] + String(video.views)[1] + String(video.views)[2]
    }

    var createdAt:Date = new Date(video.createdAt)
    var currentDate:Date = new Date()

    var differenceInDays:number = (currentDate.getTime() - createdAt.getTime()) / (1000 * 3600 * 24)

    if(differenceInDays >= 365){
        time = String(Math.trunc(differenceInDays / 365)) + ' anos'
    }else if(differenceInDays >= 30){
        time = String(Math.trunc(differenceInDays / 30)) + ' meses'
    }else{
        time = String(Math.trunc(differenceInDays)) + ' dias'
    }

    return (
        <Container>
            <VideoContainer>
                <img src={video.image}/>
                <span> {video.videoTime} </span> 
            </VideoContainer>
            <BottomContainer>
                <ChannelLogoContainer>
                    <img src={video.channelImage}/>
                </ChannelLogoContainer>
                <TextContainer>
                    <p className="title">{video.title}</p>
                    <span className="channelName">{video.channelName}</span>
                    <p className="view-time">
                        {views} vizualizações • há {time}
                    </p>
                    <span className="more-icon"><MdMoreVert size={20}/> </span>
                </TextContainer>
            </BottomContainer>
        </Container>
    )
}
