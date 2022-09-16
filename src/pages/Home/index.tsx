import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee.svg'
import { Container, ContentIcons, ContentTitle } from './style'

export function Home() {
  return (
    <Container>
      <ContentTitle>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver,a qualquer
          hora
        </p>
        <ContentIcons>
          <div>
            <span>
              <ShoppingCart />
            </span>
            <span>Compra simples e segura</span>
            <span>
              <Package />
            </span>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <span>
              <Timer />
            </span>
            <span>Entrega rápida e rastreada</span>
            <span>
              <Coffee />
            </span>
            <span>O Café chega fresquinho até você</span>
          </div>
        </ContentIcons>
      </ContentTitle>
      <img src={coffee} alt="" />
    </Container>
  )
}
