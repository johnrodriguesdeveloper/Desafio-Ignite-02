import { useEffect, useState } from 'react'
import { CardsCoffes, Coffee } from './CardsCoffes'
import { ContentCard } from './style'

export function AllCoffes() {
  const [allCoffees, setAllCoffees] = useState<Coffee[]>([])
  async function loadCoffees() {
    const response = await fetch('http://localhost:3000/coffees')
    const data = await response.json()

    setAllCoffees(data)
  }
  useEffect(() => {
    loadCoffees()
  }, [])

  return (
    <div>
      <ContentCard>
        {allCoffees.map((coffee) => (
          <CardsCoffes key={coffee.id} coffee={coffee} />
        ))}
      </ContentCard>
    </div>
  )
}
