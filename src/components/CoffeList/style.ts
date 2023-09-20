import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 10rem;
  margin-left: 1.5rem;
  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 54px;
`
