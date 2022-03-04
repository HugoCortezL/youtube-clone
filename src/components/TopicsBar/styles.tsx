import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    width: calc(100% - 240px);
    height: 59px;
    background-color: #FFFFFF;
    z-index: 1000;
    right: 0;
    top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InsideContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
`

export const Line = styled.span`
    display: block;
    width: 100%;
    height: 0.5px;
    background-color: #dfdfdf;
    margin-top: ${props => props.margin};
`

export const TopicContainer = styled.div`
    padding: 8px 12px;
    background-color: #${props => props.active ? "000000" : "f0f0f0"};
    color: #${props => props.active ? "FFFFFF" : "000000"};
    border-radius: 20px;
    margin: 5px;
    border: 0.5px solid #dfdfdf;
    font-size: 14px;
    cursor: pointer;
`
