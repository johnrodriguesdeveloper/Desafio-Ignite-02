import React, { createContext, useState, ReactNode } from 'react'

interface CartCountType {
  cartCount: number
}

interface CardContextType {
  cartCount: CartCountType
  setCartCount: React.Dispatch<React.SetStateAction<CartCountType>>
}

interface CardProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardProvider({ children }: CardProviderProps) {
  const [cartCount, setCartCount] = useState<CartCountType>({ cartCount: 0 })

  return (
    <CardContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CardContext.Provider>
  )
}
