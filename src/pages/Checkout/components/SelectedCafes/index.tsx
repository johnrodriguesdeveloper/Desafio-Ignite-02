import { NavLink } from 'react-router-dom'
import { TitleSectionCheckout } from '../../../../styles/global'
import { CardCartCoffes } from './CardCartCoffees'
import {
  ButtonConfirmed,
  SelectedCafesContainer,
  SelectedCafesContent,
  TextFooterSelectedCafes,
} from './style'
import { useContext } from 'react'
import { CardContext } from '../../../../contexts/CardContext'

export function SelectedCafes() {
  const { allCoffees } = useContext(CardContext)
  const cartCoffees = allCoffees.filter((coffee) => coffee.markedcoffee)

  return (
    <SelectedCafesContainer>
      <TitleSectionCheckout>Cafés selecionados </TitleSectionCheckout>
      <SelectedCafesContent>
        {cartCoffees.map((coffee) => (
          <CardCartCoffes key={coffee.id} coffee={coffee} />
        ))}
        <TextFooterSelectedCafes>
          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>
              <b>Total</b>
            </p>
          </div>
          <div>
            <p>R$ 29,70</p>
            <p>R$ 3,50</p>
            <p>
              <b>R$ 33,20</b>
            </p>
          </div>
        </TextFooterSelectedCafes>
        <NavLink to="/successfulorder" title="successfulorder">
          <ButtonConfirmed>CONFIRMAR PEDIDO</ButtonConfirmed>
        </NavLink>
      </SelectedCafesContent>
    </SelectedCafesContainer>
  )
}
