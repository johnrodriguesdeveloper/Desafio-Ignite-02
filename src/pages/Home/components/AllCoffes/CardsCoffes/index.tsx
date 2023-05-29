import { ShoppingCart } from 'phosphor-react'
import {
  AddCartWrapper,
  ButtonFooter,
  CardFooter,
  CardsCoffeesContainer,
  Description,
  Name,
  Price,
  Tags,
} from './style'
import { ButtonsIncrevements } from '../../../../../components/ButtonsIncrements'
import { formatMoney } from '../../../../../utils/formatMoney'
import { CardContext, Coffee } from '../../../../../contexts/CardContext'
import { useContext } from 'react'

export interface CoffeeProps {
  coffee: Coffee
}

export function CardsCoffes({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)
  const { toogleMarkedCoffee } = useContext(CardContext)

  return (
    <CardsCoffeesContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name> {coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <Price>
          R$ <span>{formattedPrice}</span>
        </Price>
        <ButtonFooter>
          <ButtonsIncrevements coffee={coffee} />
          <AddCartWrapper>
            <button onClick={() => toogleMarkedCoffee(coffee.id)}>
              <ShoppingCart weight="fill" size={22} color="white" />
            </button>
          </AddCartWrapper>
        </ButtonFooter>
      </CardFooter>
    </CardsCoffeesContainer>
  )
}
