import styled from 'styled-components'

export const CardsCoffeesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 00.25rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  margin-bottom: 2rem;
  opacity: 0.7;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Price = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme['base-text']};
  span {
    font-size: 1rem;
    line-height: 130%;
    text-align: right;
  }
`
export const ButtonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddCartWrapper = styled.div`
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.purple};
    }
  }
`
