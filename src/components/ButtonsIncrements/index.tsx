import { useContext } from 'react'
import { ButtonsIncrementsContainer } from './style'
import { CardContext, Coffee } from '../../contexts/CardContext'
import { CoffeeProps } from '../../pages/Home/components/AllCoffes/CardsCoffes'
import { api } from '../../services/api'

export function ButtonsIncrevements({ coffee }: CoffeeProps) {
  const { cartCount, setCartCount, loadCoffees } = useContext(CardContext)

  async function handleIncrement(id: number) {
    try {
      const response = await api.get('/coffees')
      const data = response.data
      console.log('Objeto JSON recuperado:', data)

      const coffeeToUpdate = data.find((coffee: Coffee) => coffee.id === id)
      coffeeToUpdate.count += 1

      const putResponse = await api.put(`/coffees/${id}`, coffeeToUpdate)
      console.log('Requisição bem sucedida:', putResponse)
      loadCoffees()
      setCartCount(coffee.count <= 1 ? cartCount + 2 : cartCount + 1)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }
  async function handleDecrement(id: number) {
    if (coffee.count > 1) {
      try {
        const response = await api.get('/coffees')
        const data = response.data
        console.log('Objeto JSON recuperado:', data)

        const coffeeToUpdate = data.find((coffee: Coffee) => coffee.id === id)
        coffeeToUpdate.count -= 1

        const putResponse = await api.put(`/coffees/${id}`, coffeeToUpdate)
        console.log('Requisição bem sucedida:', putResponse)
        loadCoffees()
        setCartCount(coffee.count === 2 ? cartCount - 2 : cartCount - 1)
      } catch (error) {
        console.error('Erro na requisição:', error)
      }
    }
  }

  return (
    <ButtonsIncrementsContainer>
      <button onClick={() => handleDecrement(coffee.id)}>-</button>
      <span>{coffee.count}</span>
      <button onClick={() => handleIncrement(coffee.id)}>+</button>
    </ButtonsIncrementsContainer>
  )
}
