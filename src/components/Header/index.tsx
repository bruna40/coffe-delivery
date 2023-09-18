import logo from '../../assets/Logo.svg'
import { Container, HeaderContainer, Location, Cart } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <Container>
        <Location>
          <MapPin size={22} />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} />
        </Cart>
      </Container>
    </HeaderContainer>
  )
}
