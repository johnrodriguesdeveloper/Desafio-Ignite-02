import styled from 'styled-components'

export const SucessfulOrderContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-family: 'Baloo 2';
    line-height: 130%;
  }
`
export const SectionSuccessfulOrder = styled.div`
  display: grid;
  grid-template-columns: 526px 1fr;
  gap: 6.375rem;
  margin-top: 2rem;
`
export const DeliveryDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme['yellow-dark']};
  border-radius: 6px 44px 6px 44px;
  div .map {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.purple};
  }
  div .timer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.yellow};
  }
  div .dollar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
export const CardTextDateDelivery = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
