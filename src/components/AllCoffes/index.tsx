import { ContentCard } from './style'
import { coffees } from '../../data/coffes'
import { CardsCoffes } from './CardsCoffes'

export function AllCoffes() {
  return (
    <div>
      <ContentCard>
        {coffees.map((coffee) => (
          <CardsCoffes key={coffee.id} coffee={coffee} />
        ))}
      </ContentCard>
    </div>
  )
}
