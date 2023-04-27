import { Bank, CreditCard, Money } from 'phosphor-react'
import { FormOfPaymentContainer } from './style'

export function FormOfPayment() {
  return (
    <FormOfPaymentContainer>
      <button>
        <CreditCard color="#8047F8" size={16} />
        <span>CARTÃO DE CRÉDITO</span>
      </button>
      <button>
        <Bank color="#8047F8" size={16} />
        <span>CARTÃO DE DÉBITO</span>
      </button>
      <button>
        <Money color="#8047F8" size={16} />
        <span>DINHEIRO</span>
      </button>
    </FormOfPaymentContainer>
  )
}
