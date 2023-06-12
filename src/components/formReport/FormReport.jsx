import React, { useEffect, useState } from 'react'
import MyInput from '../UI/inputs/input/MyInput'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useAction';
import TypeSelect from '../UI/selects/typeSelect/TypeSelect'
import AreaInput from '../UI/inputs/inputArea/AreaInput'

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



export default function FormReport() {
// Значения для инпутов
const num = useInput('', {isEmpty: true})
const fullname = useInput('', {isEmpty: true})
const typ = useInput('', {isEmpty: true})


  const [col, setCol] = useState('');
  const [dat, setDat] = useState('');
  const [offic, setOffic] = useState('');
  const [descr, setDescr] = useState('');

  const {error, message} = useSelector(state => state.case);
  const {fetchAddCases} = useActions()
  
  const handleMessage = (e) => {
    e.preventDefault();
    message.licenseNumber = num.value
    message.ownerFullName = fullname.value
    message.type = typ.value
    message.color = col
    message.date = dat
    message.clientId = offic
    message.description = descr
    fetchAddCases(message,  'https://sf-final-project-be.herokuapp.com/api/public/report', '')
  }

  return (
    <main className="main"> 
        <div className="container container-person">
          <h1 className="page__title">Сообщить о краже</h1>
          <form className="form-message">
            <div className="form-body--row row2">
            <div className="form-body-wrapper">
                <MyInput 
                    required 
                    type="text"
                    label='Номер лицензии'
                    value={num.value}
                    onChange={e => num.onChange(e)}
                    onBlur={e => num.onBlur(e)}
                />
                {(num.isDirty && num.isEmpty) && <p className='error-text'>Поле не может быть пустым</p>}
              </div>
              <div className="form-body-wrapper">
                <MyInput 
                    required
                    type="text"
                    label='ФИО владельца'
                    value={fullname.value}
                    onChange={e => fullname.onChange(e)}
                    onBlur={e => fullname.onBlur(e)}
                />
                {(fullname.isDirty && fullname.isEmpty) && <p className='error-text'>Поле не может быть пустым</p>}
                </div>
              </div>
              <div className="form-body--row row3">
              <div className="form-body-wrapper">
                <TypeSelect 
                  required
                  value={typ.value}
                  onChange={e => typ.onChange(e)}
                  onBlur={e => typ.onBlur(e)}
                />
                {(typ.isDirty && typ.isEmpty) && <p className='error-text'>Поле не может быть пустым</p>}
                </div>
                <MyInput 
                    type="text"
                    label='Цвет'
                    value={col}
                    onChange={(e) => setCol(e.target.value)}
                />
                <MyInput 
                    type="date"
                    format={'DD/MM/YYYY'}
                    label='Дата'
                    value={dat}
                    onChange={(e) => setDat(e.target.value)}
                    InputLabelProps={{
                      shrink: true
                    }}
                />
              </div>
              <div className="form-body--row row1">
                <MyInput 
                    required
                    type="text"
                    label='№ клиента'
                    value={offic}
                    onChange={(e) => setOffic(e.target.value)}
                />
              </div>
              <div className="form-body--row">
                <AreaInput  
                    label='Описание'
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                />
              </div>
            <div className="form__bottom">
            <button
            disabled={!num.inputValid || !fullname.inputValid || !typ.inputValid}
              className="btn"
              onClick={handleMessage}
              >Сообщить о краже</button>
            </div>
          </form>
        </div>
    </main>
  )
}

