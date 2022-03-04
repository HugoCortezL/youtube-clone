import styled from 'styled-components'

export const Container = styled.div`
    width: 240px;
    height: 100%;
    position: fixed;
    top: 56px;
    left: 0;
    padding: 12px 10px 55px 0;
    overflow-y: scroll;
    .titleArea{
        margin: 0 0 10px 25px;
        font-size: 14px;
        font-weight: 600;
        color: #5a5a5a;
    }
`

export const Line = styled.span`
    display: block;
    width: 100%;
    height: 0.5px;
    background-color: #dfdfdf;
    margin: 15px 0;
`

export const ItemMenu = styled.div`
    width: 100%;
    height: 40px;
    background-color: #${props => props.active ? 'c3c3c3' : 'ffffff'};
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    &:hover{
        background-color: #${props => props.active ? 'dfdfdf' : 'f1f1f1'};
    }
    .icon{
        margin: 0 25px;
    }

    span img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
`
