import React from 'react'
import Logo from '../UI/logo/Logo'
import Link from '../UI/link/Link'

export default function footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="wrapper footer-wrapper">
                <Logo />
                <ul className="nav__list">
                    <li className="nav__item nav__item--menu">
                        <Link 
                            text="bicycle@mail.ru"
                            href="mailto:bicycle@mail.ru"
                            className="contacts__item"
                        />
                    </li>
                    <li className="nav__item">
                        <Link 
                            text="+7 (888) 888-88-88"
                            href="tel:+78888888888"
                            className="contacts__item"
                        />
                    </li>
                </ul>
            </div>
            <div className="copyright wrapper">
                <p>&#169; 2023, Краснодар</p>
                <p>Дмитрий Касапов</p>
            </div>
            
        </div>
    </footer>
  )
}

