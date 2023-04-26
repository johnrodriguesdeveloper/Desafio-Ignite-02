import { CompleteOrder } from './components/CompleteOrder'
import { SelecedCafes } from './components/SelectedCafes'
import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder />
      <SelecedCafes />
    </CheckoutContainer>
  )
}
