import { Container } from './styles'

import VideoDisplay from '../../components/VideoDisplay'
import Menu from '../../components/Menu'
import TopicsBar from '../../components/TopicsBar'

import { loadVideos } from '../../services/videos'

const videos = loadVideos()

export default function Home() {
  return (
    <>
      <Menu/>
      <TopicsBar/>
      <Container>
        {videos.map(video => <VideoDisplay key={video.id} video={video}/>)}  
      </Container>
    </>
  )
}
