import React, { useContext } from 'react'
import Link from '../../UI/link/Link'
import { AuthContext } from '../../../context';


export default function HeaderMenu(props) {
    const {isAuth} = useContext(AuthContext);
  return (
    isAuth
    ? <nav className={`nav ${props.className}`}>
        <ul className="nav__list">
            <li className="nav__item nav__item--menu">
                <Link 
                    text="Сообщить о краже"
                    href="/message"
                    className="nav__link"
                />
            </li>
            <li className="nav__item">
                <Link 
                    text="Сотрудники"
                    href="/personal"
                    className="nav__link"
                />
            </li>
            <li className="nav__item">
                <Link 
                    text="Кражи"
                    href="/cases"
                    className="nav__link"
                />
            </li>
        </ul>
        </nav>
    :
    <nav className={`nav ${props.className}`}>
        <ul className="nav__list">
            <li className="nav__item nav__item--menu">
                <Link 
                    text="Сообщить о краже"
                    href="/message"
                    className="nav__link"
                />
            </li>
        </ul>
    </nav>
  )
}
