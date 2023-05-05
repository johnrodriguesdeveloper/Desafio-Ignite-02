import { useContext, useState } from 'react'
import { ButtonsIncrementsContainer } from './style'
import { CardContext, Coffee } from '../../contexts/CardContext'
import { CoffeeProps } from '../../pages/Home/components/AllCoffes/CardsCoffes'

export function ButtonsIncrevements({ coffee }: CoffeeProps) {
  const { cartCount, setCartCount } = useContext(CardContext)
  const [countCoffees, setCountCoffees] = useState(1)

  // function incrementCount() {
  //   setCountCoffees(countCoffees + 1)
  //   setCartCount(countCoffees <= 1 ? cartCount + 2 : cartCount + 1)
  // }
  // function decrementCount() {
  //   if (countCoffees > 1) {
  //     setCountCoffees(countCoffees - 1)
  //     setCartCount(countCoffees === 2 ? cartCount - 2 : cartCount - 1)
  //   }
  // }

  async function updateCoffeeIncrementCount(id: number, delta: number) {
    try {
      const response = await fetch('http://localhost:3000/coffees')
      const data = await response.json()
      console.log('Objeto JSON recuperado:', data)
      const coffeeToUpdate = data.coffees.find(
        (coffee: Coffee) => coffee.id === id,
      )
      coffeeToUpdate.count += 1
      const putResponse = await fetch(`http://exemplo.com/api/coffees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('Requisição bem sucedida:', putResponse)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }

    setCartCount(countCoffees <= 1 ? cartCount + 2 : cartCount + 1)
  }

  const handleIncrement = () => {
    updateCoffeeIncrementCount(coffee.id, 1)
  }

  const handleDecrement = () => {
    updateCoffeeIncrementCount(coffee.id, -1)
  }
  return (
    <ButtonsIncrementsContainer>
      <button onClick={handleIncrement}>-</button>
      <span>{coffee.count}</span>
      <button onClick={handleDecrement}>+</button>
    </ButtonsIncrementsContainer>
  )
}
