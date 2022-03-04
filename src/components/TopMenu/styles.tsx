import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    background-color: #FFFFFF;
`

export const LogoContainer = styled.div`
    margin-left: 23px;
    height: 100%;
    display: flex;
    align-items: center;
    img{
        height: 40%;
        margin-left: 18px;
    }
    & > *{
        cursor: pointer;
    }
`

export const SearchContainer = styled.div`
    width: 685px;
    height: 42px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    position: relative;
    .icon{
        position:absolute;
        right: 120px;
        top: 10px;
        cursor: pointer;
        & > *{
            margin-left: 5px;
        }
    }
`

export const SearchBar = styled.input`
    height: 100%;
    width: 83.5%;
    font-size: 17px;
    border: 1px solid #c3c3c3;
    border-radius: 3px 0 0 3px;
    `

export const SearchButton = styled.button`
    height: 100%;
    width: 9%;
    border: none;
    border-top: 1px solid #c3c3c3;
    border-right: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    margin-right: 5px;
    background-color: #f3f3f3;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
`

export const MicContainer = styled.div`
    width: calc(7.5% - 7px);
    height: 100%;
    border-radius: 50%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const OptionsContainer = styled.div`
    margin-right: 48px;
    width: 182px;
    height: 40.7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > *{
        cursor: pointer;
    }

`

export const UserContainer = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #915483;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
`
