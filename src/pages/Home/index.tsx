import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee.svg'
import { AllCoffes } from '../../components/AllCoffes'
import {
  BackgroundIcons,
  Container,
  Content,
  ContentIcons,
  ContentTitle,
} from './style'

export function Home() {
  return (
    <Container>
      <Content>
        <ContentTitle>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver,a qualquer
            hora
          </p>
          <ContentIcons>
            <div className="ListIcons">
              <div>
                <BackgroundIcons statusColor="yellowDark">
                  <ShoppingCart weight="fill" color="white" />
                </BackgroundIcons>
                Compra simples e segura
              </div>
              <div>
                <BackgroundIcons statusColor="yellow">
                  <Timer weight="fill" color="white" />
                </BackgroundIcons>
                Entrega rápida e rastreada
              </div>
            </div>
            <div className="ListIcons">
              <div>
                <BackgroundIcons statusColor="gray">
                  <Package weight="fill" color="white" />
                </BackgroundIcons>
                Embalagem mantém o café intacto
              </div>

              <div>
                <BackgroundIcons statusColor="purple">
                  <Coffee weight="fill" color="white" />
                </BackgroundIcons>
                O Café chega fresquinho até você
              </div>
            </div>
          </ContentIcons>
        </ContentTitle>
        <img src={coffee} alt="" />
      </Content>

      <AllCoffes />
    </Container>
  )
}
