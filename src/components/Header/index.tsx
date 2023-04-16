import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderContainer, Location, Navigator } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <Navigator>
                <Location><MapPin size={22} weight='fill' /><span>Porto Alegre - RS</span></Location>
                <nav>
                    <NavLink to="/cart" title='Carrinho'><span><ShoppingCart size={22} weight='fill'></ShoppingCart></span></NavLink>
                </nav>
            </Navigator>
        </HeaderContainer>
    )
}