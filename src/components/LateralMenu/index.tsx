import { Container, ItemMenu, Line } from './styles'
import { FaHome }  from 'react-icons/fa'
import { AiOutlineCompass, AiOutlineYoutube, AiOutlineHistory, AiOutlinePlaySquare, AiOutlineClockCircle, AiOutlineLike, AiOutlinePlusCircle, AiOutlineTrophy } from "react-icons/ai"
import { BsBookmarkStar, BsFlag } from 'react-icons/bs'
import { MdOutlineVideoLibrary, MdOutlineFeedback } from 'react-icons/md'
import { GiFilmStrip, GiSpellBook } from 'react-icons/gi'
import { GrGamepad } from 'react-icons/gr'
import { CgLivePhoto } from 'react-icons/cg'
import { BiCog, BiHelpCircle } from 'react-icons/bi'

export default function LateralMenu() {
  return (
    <Container>
      <ItemMenu active={true}>
        <span className="icon">
          <FaHome size={25}/>
        </span>
        Início  
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineCompass size={25}/>
        </span>
        Explorar 
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineYoutube size={25}/>
        </span>
        Shorts  
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <BsBookmarkStar size={25}/>
        </span>
        Inscrições  
      </ItemMenu>
      
      <Line/>

      <ItemMenu>
        <span className="icon">
          <MdOutlineVideoLibrary size={25}/>
        </span>
        Biblioteca  
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineHistory size={25}/>
        </span>
        Historico 
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlinePlaySquare size={25}/>
        </span>
        Shorts  
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineClockCircle size={25}/>
        </span>
        Seus vídeos  
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineLike size={25}/>
        </span>
        Vídeos marcados como gostei 
      </ItemMenu>

      <Line/>

      <p className="titleArea"> INSCRIÇÕES </p>

      <ItemMenu>
        <span className="icon">
          <img src="https://yt3.ggpht.com/ytc/AKedOLQmkcbGLVX43JlyucS1p7h_4UC8iZbVvnsW4J447T0=s88-c-k-c0x00ffffff-no-rj"/>
        </span>
        Tá gravando
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <img src="https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0x00ffffff-no-rj"/>
        </span>
        The Net Ninja 
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <img src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"/>
        </span>
        Clever Programmer 
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <img src="https://yt3.ggpht.com/ytc/AKedOLQ0bZfVzpq_TBL7u-k6dSNRFX3dt2mU-m0_HfO7dg=s88-c-k-c0x00ffffff-no-rj"/>
        </span>
        Willian Candillon 
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <img src="https://yt3.ggpht.com/AN17UxzyA-NjCh24gII5wH4eHFTDiGNwZi5LwFW7aoUxl105mtrhQ99L3r_yPD1HlxdhboHJH7U=s68-c-k-c0x00ffffff-no-rj"/>
        </span>
        Humor Multishow
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlinePlusCircle size={25}/>
        </span>
        Procurar canais
      </ItemMenu>

      <Line/>

      <p className="titleArea"> MAIS DO YOUTUBE </p>

      <ItemMenu>
        <span className="icon">
          <AiOutlineYoutube size={25}/>
        </span>
        Youtube premium
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <GiFilmStrip size={25}/>
        </span>
        Filmes
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <GrGamepad size={25}/>
        </span>
        Jogos
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <CgLivePhoto size={25}/>
        </span>
        Ao vivo
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <GiSpellBook size={25}/>
        </span>
        Aprender
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <AiOutlineTrophy size={25}/>
        </span>
        Esportes
      </ItemMenu>

      <Line/>

      <ItemMenu>
        <span className="icon">
          <BiCog size={25}/>
        </span>
        Configurações
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <BsFlag size={25}/>
        </span>
        Historico de denuncias
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <BiHelpCircle size={25}/>
        </span>
        Ajuda
      </ItemMenu>
      <ItemMenu>
        <span className="icon">
          <MdOutlineFeedback size={25}/>
        </span>
        Enviar feedback
      </ItemMenu>
      
      <Line/>

      
    </Container>
  )
}
