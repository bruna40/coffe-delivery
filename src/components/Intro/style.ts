import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 192px;
  text-align: left;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: bold;
  }
`
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  span {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;

    p {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
`
export const Imagem = styled.div`
  width: 476px;
  padding-left: 3.5rem;
`
