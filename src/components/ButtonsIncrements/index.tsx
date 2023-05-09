import { useContext, useEffect, useState } from 'react'
import { ButtonsIncrementsContainer } from './style'
import { CardContext, Coffee } from '../../contexts/CardContext'
import { CoffeeProps } from '../../pages/Home/components/AllCoffes/CardsCoffes'
import { api } from '../../services/api'

export function ButtonsIncrevements({ coffee }: CoffeeProps) {
  const { cartCount, setCartCount, loadCoffees } = useContext(CardContext)
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

  // async function updateCoffeeIncrementCount(id: number, delta: number) {
  //   try {
  //     const response = await fetch('http://localhost:3000/coffees')
  //     const data = await response.json()
  //     console.log('Objeto JSON recuperado:', data)
  //     const coffeeToUpdate = data.find((coffee: Coffee) => coffee.id === id)
  //     coffeeToUpdate.count += 1
  //     console.log(coffeeToUpdate)
  //     const putResponse = await fetch(`http://exemplo.com/api/coffees/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     console.log('Requisição bem sucedida:', putResponse)
  //   } catch (error) {
  //     console.error('Erro na requisição:', error)
  //   }
  // }

  async function updateCoffeeIncrementCount(id: number, delta: number) {
    try {
      const response = await api.get('http://localhost:3000/coffees')
      const data = response.data
      console.log('Objeto JSON recuperado:', data)

      // Encontrar o objeto coffee específico que deseja atualizar
      const coffeeToUpdate = data.find((coffee: Coffee) => coffee.id === id)
      coffeeToUpdate.count += delta
      console.log(coffeeToUpdate)

      // Enviar o objeto JSON atualizado de volta para o servidor, usando uma requisição PUT com Axios
      const putResponse = await api.put(
        `http://localhost:3000/coffees/${id}`,
        coffeeToUpdate,
      )
      console.log('Requisição bem sucedida:', putResponse)
      loadCoffees()
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
      <button onClick={handleDecrement}>-</button>
      <span>{coffee.count}</span>
      <button onClick={handleIncrement}>+</button>
    </ButtonsIncrementsContainer>
  )
}
