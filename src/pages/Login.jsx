import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import MyInput from '../components/UI/inputs/input/MyInput';
import RegistrLink from '../components/UI/registrazion/RegistrLink.jsx';
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useAction';
import { AuthContext } from '../context/index.js';
import InputPassword from '../components/UI/inputs/password/InputPassword';


//Хук для валидации
const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for(const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
        break;
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
        break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
        break;
        case 'isEmail':
          const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
        break;
      }
    }
  }, [value])

  useEffect(() => {
    if(isEmpty || minLengthError || maxLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid
  }
}
// Хук для валидации
  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
      setValue(e.target.value)
    }
    const onBlur = (e) => {
      setDirty(true)
    }
    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

export default function Login() {
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const {error, values} = useSelector(state => state.auth);
  const {fetchAuth} = useActions()

// Значения для инпутов
const email = useInput('', {isEmpty: true, isEmail: true})
const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 12})

  const changePage = () => {
    navigate("/", { replace: true });
  }
  const handleAuth = (e) => {
    e.preventDefault();
      values.email = email.value
      values.password = password.value
      fetchAuth(values)

   if(error !== null) {
    navigate("/", { replace: true });
    setIsAuth(true)
    } else {
      navigate("/login", { replace: true });
    }
    
  }  

 
  return (
    <div className='container '>
      <div className="form-wrapper">
        <h1 className="page__title">Вход</h1>
        <form className="form-body">
        <div className="input_wrap">
            <MyInput
                required 
                type="email"
                label='Введите email'
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
            />
            {(email.isDirty && email.isEmpty) && <p className='error-text'>Поле не может быть пустым</p>}
            {(email.isDirty && email.emailError) && <p className='error-text'>Неправильный формат email (xxxxx@xxx.x)</p>}
          </div>
          <div className="input_wrap">
          <InputPassword 
                value={password.value}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
              />
              {(password.isDirty && password.isEmpty) && <p className='error-text'>Поле не может быть пустым</p>}
              {(password.isDirty && password.minLengthError) && <p className='error-text'>Пароль не может быть менее 3-х символов</p>}
              {(password.isDirty && password.maxLengthError) && <p className='error-text'>Пароль не может быть длиннее 12-ти символов</p>}
          </div>
          <div className="form__bottom">
            <button 
            disabled={!email.inputValid || !password.inputValid}
                className="btn"
                onClick={handleAuth}
                >Войти</button>
            <RegistrLink
            href="/registration" 
              text="зарегистрироваться"
            />
          </div>
            
        </form>
        
      </div>
    </div>
  )
}

