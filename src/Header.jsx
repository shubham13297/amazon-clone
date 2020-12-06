import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
const Header = () => {
    const [state, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (state.user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <NavLink exact to="/">
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='amazon_logo' />
            </NavLink>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <NavLink exact to={!state.user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className="header__optionLineOne">Hello {state.user ? state.user?.email : 'User'}</span>
                        <span className="header__optionLineTwo">{state.user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </NavLink>
                <div className='header__option'>
                    <span className="header__optionLineOne">Returns </span>
                    <span className="header__optionLineTwo">&orders</span>

                </div>
                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime </span>

                </div>
                <NavLink exact to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{state.basket?.length}</span>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default Header;
