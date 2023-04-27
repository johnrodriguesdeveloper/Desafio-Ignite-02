import styled from 'styled-components'

export const CardCartCoffesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const HeaderCardCoffes = styled.div`
  display: flex;
  gap: 0.75rem;
  img {
    width: 4rem;
  }
  p {x
    font-weight: regular;
    font-size: 16px;
    line-height: 130%;
  }
`
export const ButtonsCardCartCoffee = styled.div``

export const FooterContainerButtons = styled.div`
  display: flex;
`
export const ButtonRemover = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme['base-button']};
  background: ${({ theme }) => theme['base-input']};
  overflow: hidden;
  transition: 0.4s;
  border-radius: 6px;

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  font-size: 0.75rem;
  color: ${({ theme }) => theme['base-text']};
  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  span {
    padding-left: 00.75rem;
    user-select: none;
    text-transform: uppercase;
  }
`
