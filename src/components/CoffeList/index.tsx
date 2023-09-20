import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import coffes from '../../data/coffes.json'
import { Container, ListContainer, Coffee, Description, Tag } from './style'

export function CoffeeList() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <ListContainer>
        {coffes.map((coffe) => {
          return (
            <Coffee key={coffe.nome}>
              <img src={coffe.imagem} alt={coffe.nome} />
              <Description>
                <Tag>
                  {coffe.tag.map((tags) => {
                    return <h5 key={tags}>{tags}</h5>
                  })}
                </Tag>
                <h4>{coffe.nome}</h4>
                <p>{coffe.descricao}</p>
                <span>
                  {coffe.preco}
                  <div>
                    <button>
                      <Minus />
                    </button>
                    <p>0</p>
                    <button>
                      <Plus />
                    </button>
                    <button>
                      <ShoppingCart />
                    </button>
                  </div>
                </span>
              </Description>
            </Coffee>
          )
        })}
      </ListContainer>
    </Container>
  )
}
