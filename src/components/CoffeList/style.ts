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

  p {
    display: flex;
    align-items: center;
  }
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 54px;
`

export const Coffee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: 256px;
  height: 310px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -2rem;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;

  h4 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`

export const Tag = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.4rem;
  h5 {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 0.8rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto', sans-serif;
    align-self: center;
  }
`
