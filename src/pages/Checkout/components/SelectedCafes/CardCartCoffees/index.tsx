import { Trash } from 'phosphor-react'
import { ButtonsIncrevements } from '../../../../../components/ButtonsIncrements'
import {
  ButtonRemover,
  CardCartCoffesContainer,
  FooterContainerButtons,
  HeaderCardCoffes,
} from './style'
import { CoffeeProps } from '../../../../Home/components/AllCoffes/CardsCoffes'

export function CardCartCoffes({ coffee }: CoffeeProps) {
  return (
    <CardCartCoffesContainer>
      <HeaderCardCoffes>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          {coffee.tags.map((tag) => (
            <p key={`${coffee.id}${tag}`}>{tag}</p>
          ))}
          <FooterContainerButtons>
            <ButtonsIncrevements coffee={coffee} />
            <ButtonRemover>
              <Trash size={16} color="#8047F8" />
              <span>Remover</span>
            </ButtonRemover>
          </FooterContainerButtons>
        </div>
      </HeaderCardCoffes>
      <div>
        <p>R$ 9,90</p>
      </div>
    </CardCartCoffesContainer>
  )
}
