import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { ButtonCart, ButtonMap, Container, ContentButtons } from './style'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext'

export function Header() {
  const { cartCount } = useContext(CardContext)

  return (
    <Container>
      <NavLink to="/" title="CoffeeDelivery">
        <img src={logo} alt="" />
      </NavLink>

      <ContentButtons>
        <ButtonMap>
          <MapPin size="22" weight="fill" />
          Sergipe
        </ButtonMap>

        <NavLink to="/checkout" title="checkout">
          <ButtonCart>
            {cartCount >= 1 && <span className="cartCount">{cartCount}</span>}
            <ShoppingCart size={20} weight="fill" />
          </ButtonCart>
        </NavLink>
      </ContentButtons>
    </Container>
  )
}
