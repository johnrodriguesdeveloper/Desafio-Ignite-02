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
import { useFormContext } from 'react-hook-form'

export function SelectedCafes() {
  const { allCoffees, setAddress } = useContext(CardContext)
  const { handleSubmit } = useFormContext()
  const cartCoffees = allCoffees.filter((coffee) => coffee.markedcoffee)

  let somaPrice = 0
  let somaCount = 0

  function paymentConfirmation(data: any) {
    setAddress(data)
  }

  for (let i = 0; i < cartCoffees.length; i++) {
    somaPrice += cartCoffees[i].price
    somaCount += cartCoffees[i].count
  }
  // eslint-disable-next-line prettier/prettier
  const priceDelivery = 3.50
  const priceTotalItens = somaPrice * somaCount
  const priceTotalItensFormated = priceTotalItens.toFixed(2)
  const priceTotal = Number(priceTotalItensFormated) + Number(priceDelivery)

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
            <p>R$ {priceTotalItensFormated}</p>
            <p>R$ {priceDelivery}</p>
            <p>
              <b>R$ {priceTotal}</b>
            </p>
          </div>
        </TextFooterSelectedCafes>

        <ButtonConfirmed onClick={handleSubmit(paymentConfirmation)}>
          <NavLink to="/successfulorder" title="successfulorder">
            <button>CONFIRMAR PEDIDO</button>
          </NavLink>
        </ButtonConfirmed>
      </SelectedCafesContent>
    </SelectedCafesContainer>
  )
}
