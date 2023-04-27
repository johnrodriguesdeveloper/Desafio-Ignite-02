import styled from 'styled-components'

export const ButtonsIncrementsContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    font-size: 1.5rem;
    border: none;
    background: transparent;
    padding: 0 0.5rem;
    transition: 0.4s;
    color: ${({ theme }) => theme.purple};
    &:hover {
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
