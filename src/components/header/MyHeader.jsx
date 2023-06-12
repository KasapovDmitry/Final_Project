
import React, {useState} from 'react'
import Logo from '../UI/logo/Logo'
import HeaderMenu from './menu/HeaderMenu'
import LogMain from '../loginmain/LogMain';
import Burger from './burger/Burger';

export default function MyHeader() {
  const [openMenu, setOpenMenu] = useState(true);

  const changeActive = (newClass) => {
    setOpenMenu(newClass);

  }
  return (
    <header className="header">
        <div className="container wrapper">
            <div className="header__left">
                <Logo />
                <Burger 
                  change={changeActive}
                />
                <HeaderMenu 
                className={openMenu ? '' : 'open'}
                />
            </div>
            <div className="header__right">
                <LogMain />
            </div>
        </div>
    </header>
  )
}

