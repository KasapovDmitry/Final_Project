import React, { useEffect, useContext } from 'react'
import FormCases from '../components/formCases/FormCases';
import FormReport from '../components/formReport/FormReport';
import { AuthContext } from '../context/';


export default function Message() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('myToken') !== null) {
      setIsAuth(true)
    }
  }, [])


  return (
    isAuth
    ? <FormCases />
    : <FormReport />
  )
}

