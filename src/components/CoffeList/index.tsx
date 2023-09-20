import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import coffes from '../../data/coffes.json'
import {
  Container,
  ListContainer,
  Coffee,
  Description,
  Tag,
  ContainerCart,
  Text,
  Button,
} from './style'

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
                <Text>{coffe.descricao}</Text>
                <ContainerCart>
                  R$
                  <p>{coffe.preco}</p>
                  <span>
                    <button>
                      <Minus />
                    </button>
                    <p>0</p>
                    <button>
                      <Plus />
                    </button>
                  </span>
                  <Button>
                    <ShoppingCart size={17} />
                  </Button>
                </ContainerCart>
              </Description>
            </Coffee>
          )
        })}
      </ListContainer>
    </Container>
  )
}
