import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { ButtonCart, ButtonMap, Container, ContentButtons } from './style'

export function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
      </div>
      <ContentButtons>
        <ButtonMap>
          <MapPin size="22" weight="fill" />
          Sergipe
        </ButtonMap>
        <ButtonCart>
          <ShoppingCart size="22" weight="fill" />
        </ButtonCart>
      </ContentButtons>
    </Container>
  )
}
