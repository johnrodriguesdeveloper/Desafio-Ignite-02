import styled from 'styled-components'

export const SelectedCafesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 00.875rem;
`
export const SelectedCafesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  width: 100%;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const TextFooterSelectedCafes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: space-between;
  b {
    font-size: 1.25rem;
  }
`
export const ButtonConfirmed = styled.button`
  width: 100%;
  padding: 0.75rem 0rem;
  border: none;
  font-weight: bold;
  font-size: 14px;

  border-radius: 6px;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  transition: 0.4s;

  :hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
  }
`
