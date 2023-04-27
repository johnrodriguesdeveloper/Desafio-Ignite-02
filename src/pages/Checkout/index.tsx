import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCafes } from './components/SelectedCafes'

import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder />
      <SelectedCafes />
    </CheckoutContainer>
  )
}
