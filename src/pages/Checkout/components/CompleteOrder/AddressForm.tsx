import { AddressFormContainer } from './style'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <input type="text" placeholder="CEP" className="cep" />
      <input type="text" placeholder="Rua" className="street" />
      <input type="text" placeholder="Número" />
      <input type="text" placeholder="Complemento" className="complement" />
      <input type="text" placeholder="Bairro" />
      <input type="text" placeholder="Cidade" />
      <input type="text" placeholder="UF" />
    </AddressFormContainer>
  )
}
