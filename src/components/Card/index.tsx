import { ShoppingCart } from 'phosphor-react'
import { Container, ContentCard } from './style'
import expressoTradicional from '../../assets/expressoTradicional.svg'

export function Card() {
  return (
    <div>
      <ContentCard>
        <img src={expressoTradicional} alt="" />
        <div>
          <span></span>
        </div>
        <h2>Expresso Tradicional</h2>
        <p> O tradicional café feito com água quente e grãos moídos</p>
        <div>
          <p>
            R$<span>9,90</span>
          </p>
          <button>-</button>
          <span>1</span>
          <button>+</button>
          <ShoppingCart />
        </div>
      </ContentCard>
    </div>
  )
}
