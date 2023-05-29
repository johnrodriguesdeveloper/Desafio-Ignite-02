import {
  CardTextDateDelivery,
  DeliveryDataContainer,
  SectionSuccessfulOrder,
  SucessfulOrderContainer,
} from './style'
import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext'

export function SucessfulOrder() {
  const { address } = useContext(CardContext)
  return (
    <SucessfulOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SectionSuccessfulOrder>
        <DeliveryDataContainer>
          <CardTextDateDelivery className="map">
            <div className="map">
              <MapPin color="white" weight="fill" />
            </div>

            <p>
              Entrega em{' '}
              <b>
                {' '}
                {address.road}, {address.number}
              </b>
              <br />
              {address.neighborhood} - {address.city}, {address.UF}
            </p>
          </CardTextDateDelivery>
          <CardTextDateDelivery>
            <div className="timer" color="white">
              <Timer color="white" weight="fill" />
            </div>

            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </CardTextDateDelivery>
          <CardTextDateDelivery className="dollar">
            <div className="dollar">
              <CurrencyDollar color="white" />
            </div>

            <p>
              Pagamento na entrega <br />
              <b> Cartão de Crédito</b>
            </p>
          </CardTextDateDelivery>
        </DeliveryDataContainer>

        <img src={illustration} alt="" />
      </SectionSuccessfulOrder>
    </SucessfulOrderContainer>
  )
}
