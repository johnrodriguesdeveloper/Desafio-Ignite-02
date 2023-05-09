import React, { createContext, useState, ReactNode, useEffect } from 'react'

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

interface CardContextType {
  cartCount: number
  setCartCount: React.Dispatch<React.SetStateAction<number>>
  allCoffees: Coffee[]
  loadCoffees: () => void
}

interface CardProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardProvider({ children }: CardProviderProps) {
  const [cartCount, setCartCount] = useState<number>(0)
  const [allCoffees, setAllCoffees] = useState([])
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
      value={{ cartCount, setCartCount, allCoffees, loadCoffees }}
    >
      {children}
    </CardContext.Provider>
  )
}
