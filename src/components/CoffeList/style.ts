import styled from 'styled-components'

export const Container = styled.div`
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
`

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.6rem;
    text-align: flex-end;
    margin-right: 0.5rem;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    button {
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme.purple};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
    }
  }
`
export const Button = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  align-items: center;
`
