import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../utils/formatMoney'
import {
  AddCartWrapper,
  ButtonFooter,
  ButtonsIncrements,
  CardFooter,
  CardsCoffeesContainer,
  Description,
  Name,
  Price,
  Tags,
} from './style'
import { ButtonsIncrevements } from '../../ButtonsIncrements'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}
export function CardsCoffes({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)
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
          <ButtonsIncrevements />
          <AddCartWrapper>
            <button>
              <ShoppingCart weight="fill" size={22} color="white" />
            </button>
          </AddCartWrapper>
        </ButtonFooter>
      </CardFooter>
    </CardsCoffeesContainer>
  )
}
