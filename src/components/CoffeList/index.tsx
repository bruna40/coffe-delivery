import { ShoppingCart } from '@phosphor-icons/react'
import coffes from '../../data/coffes.json'
import { Container, ListContainer } from './style'

export function CoffeeList() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <ListContainer>
        {coffes.map((coffe) => {
          return (
            <div key={coffe.nome}>
              <img src={coffe.imagem} alt={coffe.nome} />
              <span>{coffe.tag}</span>
              <h4>{coffe.nome}</h4>
              <p>{coffe.descricao}</p>
              <span>
                {coffe.preco}
                <div>
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                  <button>
                    <ShoppingCart />
                  </button>
                </div>
              </span>
            </div>
          )
        })}
      </ListContainer>
    </Container>
  )
}
