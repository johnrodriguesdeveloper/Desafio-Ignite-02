import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { api } from '../services/api'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
  count: number
  markedcoffee: boolean
}
interface Address {
  zipCode: string
  road: string
  number: number
  complement: string
  neighborhood: string
  city: string
  UF: string
}

interface CardContextType {
  cartCount: number
  setCartCount: React.Dispatch<React.SetStateAction<number>>
  allCoffees: Coffee[]
  loadCoffees: () => void
  toogleMarkedCoffee: (id: number) => void
  address: Address
  setAddress: React.Dispatch<React.SetStateAction<Address>>
}

interface CardProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardProvider({ children }: CardProviderProps) {
  const [cartCount, setCartCount] = useState<number>(0)
  const [allCoffees, setAllCoffees] = useState([])
  const [address, setAddress] = useState<Address>({
    zipCode: '',
    road: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    UF: '',
  })

  async function toogleMarkedCoffee(id: number) {
    try {
      const response = await api.get(`/coffees/${id}`)
      const data = response.data
      const toogleCoffee = data
      toogleCoffee.markedcoffee = !toogleCoffee.markedcoffee

      const putResponse = await api.put(`/coffees/${id}`, toogleCoffee)
      loadCoffees()
      console.log('Requisição bem sucedida:', putResponse)
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }
  async function loadCoffees() {
    const response = await fetch('http://localhost:3000/coffees')
    const data = await response.json()

    setAllCoffees(data)
  }
  useEffect(() => {
    loadCoffees()
  }, [])

  return (
    <CardContext.Provider
      value={{
        cartCount,
        setCartCount,
        allCoffees,
        loadCoffees,
        toogleMarkedCoffee,
        setAddress,
        address,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
