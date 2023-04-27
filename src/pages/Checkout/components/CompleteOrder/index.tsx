import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CompleteOrderContainer,
  DeliveryContainer,
  HeaderDelivery,
  HeaderPayment,
  PaymentContainer,
  TitleCompleteOrder,
} from './style'
import { AddressForm } from './AddressForm'
import { FormOfPayment } from './FormOfPayment'

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
      <PaymentContainer>
        <HeaderPayment>
          <CurrencyDollar color="#8047F8" size={22} />
          <div>
            <h1>Pagamento</h1>
            <h2>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h2>
          </div>
        </HeaderPayment>
        <FormOfPayment />
      </PaymentContainer>
    </CompleteOrderContainer>
  )
}
