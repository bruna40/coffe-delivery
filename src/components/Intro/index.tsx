import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Container, Imagem, Items, Title } from './style'
import coffeImagem from '../../assets/Imagem.svg'

export function Intro() {
  return (
    <Container>
      <div>
        <Title>
          <h1 data-test="title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p data-test="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <span>
            <ShoppingCart />
            <p>Compra simples e segura</p>
          </span>
          <span>
            <Package />
            <p>Embalagem mantém o café intacto</p>
          </span>
          <span>
            <Timer />
            <p>Entrega rápida e rastreada</p>
          </span>

          <span>
            <Coffee />
            <p>O café chega freaquinho até você</p>
          </span>
        </Items>
      </div>
      <Imagem>
        <img src={coffeImagem} alt="Coffe" />
      </Imagem>
    </Container>
  )
}
