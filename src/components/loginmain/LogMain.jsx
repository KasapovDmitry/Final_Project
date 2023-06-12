import React, { useEffect, useContext } from 'react'
import Link from '../UI/link/Link'
import { AuthContext } from '../../context';

export default function Logall() {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = (e) => {
       setIsAuth(false);
       localStorage.removeItem('myToken')

    }
    useEffect(() => {
      if (localStorage.getItem('myToken') !== null) {
        setIsAuth(true)
      }
    }, [])
  return (
    isAuth
    ? <button
        onClick={logout}
        className="btn btn--header"
    >
    Выйти
    </button> 
    : <Link 
        text="Вход / Регистрация"
        href="/login"
        className="btn btn--header"
    />
  )
}

