import styled from 'styled-components'

export const Container = styled.div`
    width: 255px;
    height: 235px;
    cursor: pointer;
    margin-bottom: 40px;
    .more-icon{
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    &:hover{
        .more-icon{
        display: inline;
    }
    }
`

export const VideoContainer = styled.div`
    width: 100%;
    height: 61.5%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    span{
        background-color: #212121dd;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        border-radius: 2px;
        padding: 2px 3px;
        position: absolute;
        bottom: 3px;
        right: 3px;
    }
`

export const BottomContainer = styled.div`
    width: 100%;
    height: 38.5%;
    display: flex;
    padding-top: 5.77%;
`

export const ChannelLogoContainer = styled.div`
    width: 19.3%;
    height: 100%;
    img{
        width: 72.73%;
        border-radius: 50%;
    }
`

export const TextContainer = styled.div`
    width: 80.7%;
    height: 100%;
    position: relative;
    .title{
        font-size: 15px;
        font-weight: 600;
        color: #212121;
        padding-bottom: 5.77%;
    }
    .channelName{
        padding-bottom: 2px;
        &:hover{
            color: #212121;
        }
    }
    .view-time, .channelName{
        color: #737373;
        font-size: 13px;
    }

`