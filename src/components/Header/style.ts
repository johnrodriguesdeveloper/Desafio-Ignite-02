import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
  align-items: center;
  margin: 0rem 0rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`
export const ContentButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const ButtonMap = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme['yellow-light']};
  }
  &:hover .cartCount {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
  }

  span {
    background: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme['yellow-light']};
    transition: 0.6s;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
