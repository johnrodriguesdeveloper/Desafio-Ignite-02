import { useContext, useState } from 'react'
import { ButtonsIncrementsContainer } from './style'
import { CardContext } from '../../contexts/CardContext'

export function ButtonsIncrevements() {
  const { cartCount, setCartCount } = useContext(CardContext)
  const [countCoffees, setCountCoffees] = useState(1)

  function incrementCount() {
    setCountCoffees(countCoffees + 1)
    setCartCount(cartCount + 1)
  }
  function decrementCount() {
    if (countCoffees > 1) {
      setCountCoffees(countCoffees - 1)
    }
    setCartCount(cartCount + 1)
  }
  console.log(countCoffees)
  return (
    <ButtonsIncrementsContainer>
      <button onClick={decrementCount}>-</button>
      <span>{countCoffees}</span>
      <button onClick={incrementCount}>+</button>
    </ButtonsIncrementsContainer>
  )
}
