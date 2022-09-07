import { HeaderContainer } from "./styles";
import logoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} />
    </HeaderContainer>
  )
}