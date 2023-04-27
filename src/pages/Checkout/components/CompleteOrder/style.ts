import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 00.875rem;
`

export const TitleCompleteOrder = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;

  display: flex;
  align-items: center;
`

export const DeliveryContainer = styled.div`
  padding: 2.5rem;
  width: 100%;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`
export const HeaderDelivery = styled.div`
  display: flex;
  gap: 0.5rem;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const AddressFormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  input {
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['base-input']};
    padding-left: 00.875rem;

    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    transition: 0.4s;

    &:focus-within {
      border-color: ${({ theme }) => theme['yellow-dark']};
    }

    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-text']};
    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const HeaderPayment = styled.div`
  display: flex;
  gap: 0.5rem;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  width: 100%;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`
export const FormOfPaymentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 00.75rem;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-top: 2rem;
    border: 1px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['base-input']};
    overflow: hidden;
    transition: 0.4s;

    &:focus-within {
      border-color: ${({ theme }) => theme['yellow-dark']};
    }

    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-text']};
    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    span {
      padding-left: 00.75rem;
    }
  }
`
