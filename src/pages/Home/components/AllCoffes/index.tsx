import { useContext } from 'react'
import { CardsCoffes } from './CardsCoffes'
import { ContentCard } from './style'
import { CardContext } from '../../../../contexts/CardContext'

export function AllCoffes() {
  const { allCoffees } = useContext(CardContext)

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
