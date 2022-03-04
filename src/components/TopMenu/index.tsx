import { Container, LogoContainer, SearchContainer, OptionsContainer, SearchBar, SearchButton, MicContainer, UserContainer } from './styles'
import { MdOutlineKeyboardAlt, MdClose, MdSearch, MdMic, MdOutlineCameraEnhance } from "react-icons/md";
import { IoIosMenu } from 'react-icons/io'
import { AiOutlineBell } from "react-icons/ai"
import { CgMenuGridR } from 'react-icons/cg';
import YtLogo from '../../images/yt-logo.png'
export default function TopMenu() {
  return (
    <Container>
      <LogoContainer>
          <IoIosMenu size={30}/>
          <img src={YtLogo} alt="" />
      </LogoContainer>
      <SearchContainer>
        <span className="icon">
          <MdOutlineKeyboardAlt size={25}/>
          <MdClose size={25}/>
        </span>
        <SearchBar/>
        <SearchButton>
          <MdSearch size={25}/>
        </SearchButton>
        <MicContainer>
          <MdMic size={25}/>
        </MicContainer>
      </SearchContainer>
      <OptionsContainer>
        <MdOutlineCameraEnhance size={25}/>
        <CgMenuGridR size={25}/>
        <AiOutlineBell size={25}/>
        <UserContainer>
          H
        </UserContainer>
      </OptionsContainer>
    </Container>
  )
}
