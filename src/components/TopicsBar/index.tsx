import { Container, TopicContainer, InsideContainer, Line } from './styles'
import {loadTopics} from '../../services/topics'

const topics = loadTopics()

export default function LateralMenu() {
  return (
    <Container>
      <Line/>
      <InsideContainer>
        {topics.map(topic => <TopicContainer key={topic.id} active={topic.active}>
          {topic.text}
        </TopicContainer>)}
      </InsideContainer>
      <Line/>
    </Container>
  )
}
