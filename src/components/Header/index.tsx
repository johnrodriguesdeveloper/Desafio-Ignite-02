import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { ButtonCart, ButtonMap, Container, ContentButtons } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <NavLink to="/" title="CoffeeDelivery">
        <div>
          <img src={logo} alt="" />
        </div>
      </NavLink>

      <ContentButtons>
        <ButtonMap>
          <MapPin size="22" weight="fill" />
          Sergipe
        </ButtonMap>

        <NavLink to="/checkout" title="checkout">
          <ButtonCart>
            <ShoppingCart size="22" weight="fill" />
          </ButtonCart>
        </NavLink>
      </ContentButtons>
    </Container>
  )
}
