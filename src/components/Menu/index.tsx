import { Container } from './styles'
import TopMenu from '../../components/TopMenu'
import LateralMenu from '../../components/LateralMenu'
export default function Menu() {
    return (
        <Container>
            <TopMenu/>
            <LateralMenu/>
        </Container>
    )
}
