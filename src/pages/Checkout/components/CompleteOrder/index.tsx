import { MapPinLine } from 'phosphor-react'
import {
  CompleteOrderContainer,
  DeliveryContainer,
  HeaderDelivery,
  TitleCompleteOrder,
} from './style'
import { AddressForm } from './AddressForm'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <TitleCompleteOrder>Complete seu pedido</TitleCompleteOrder>
      <DeliveryContainer>
        <HeaderDelivery>
          <MapPinLine color="#C47F17" size={22} />
          <div>
            <h1>Endereço de Entrega</h1>
            <h2>Informe o endereço onde deseja receber seu pedido</h2>
          </div>
        </HeaderDelivery>
        <AddressForm />
      </DeliveryContainer>
    </CompleteOrderContainer>
  )
}
