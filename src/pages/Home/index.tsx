import { Container } from './styles'
import VideoDisplay from '../../components/VideoDisplay'
import TopMenu from '../../components/TopMenu'
import { loadVideos } from '../../services/videos'

const videos = loadVideos()

export default function Home() {
  return (
    <>
      <TopMenu/>
      <Container>
        {videos.map(video => <VideoDisplay key={video.id} video={video}/>)}  
      </Container>
    </>
  )
}
