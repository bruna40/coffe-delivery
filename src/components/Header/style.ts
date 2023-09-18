import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  gap: 0.75rem;
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  gap: 0.2rem;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};
`
