import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MyInput from '../components/UI/inputs/input/MyInput';
import ApprovedSelect from '../components/UI/selects/approvedSelect/ApprovedSelect'
import { useActions } from '../hooks/useAction';
import InputPassword from '../components/UI/inputs/password/InputPassword';

export default function OneStaff() {
  const params = useParams();
  const offiserId = params.id.replace(/'/g, '');
  const {error, loading, user} = useSelector(state => state.userid);
  const {values} = useSelector(state => state.change);
  const {fetchUserId, fetchChange} = useActions()


  const [passwordIn, setPassword] = useState('');
  const [firstNameIn, setFirstName] = useState('');
  const [lastNameIn, setLastName] = useState('');
  const [approvedIn, setApproved] = useState(false);


  useEffect(() => {
    fetchUserId(localStorage.getItem('myToken'), 'get', `https://sf-final-project-be.herokuapp.com/api/officers/`, offiserId);

  }, [error])

  function checkApproved(approv) {
    if (approv) {
      return approv
    } else {
      return approvedIn
    }
  }
  const saveChange = () => {
    values.password = passwordIn
    values.firstName = firstNameIn
    values.lastName = lastNameIn
    values.approved = approvedIn
    fetchChange(values, 'https://sf-final-project-be.herokuapp.com/api/officers/', offiserId, localStorage.getItem('myToken'))
  }
  
  if (loading) {
    return (
      <main className="main">
      <div className='container container-person'>
      <h1 className="page__title">Все сотрудники</h1>
      <p>Идет загрузка...</p>
      </div>
    </main>
    )
  }
  if (error) {
    return (
      <main className="main"> 
      <div className='container container-person'>
      <h1 className="page__title">Все сотрудники</h1>
      <p>Произошла ошибка, повторите позже</p>
      </div>
    </main>
    )
  }

  return (
      <div className='container container-person'>
        <h1 className="page__title">Карточка сотрудника</h1>
        
        <div className="person__wrap">
          <div className="person__foto">
            <img src="../assets/img/avatar_default.png" alt="Фото" />
          </div>
          <div className="person__info person_block">
            <div className="person__info_row">
              <p className="person__info_name">Имя</p>
              <MyInput 
                  label='Имя'
                  contentEditable
                  suppressContentEditableWarning
                  type="text"
                  defaultValue={`${user.firstName}`}
                  onChange={(e) => setFirstName( e.target.value)}
                />
            </div>
            <div className="person__info_row">
              <p className="person__info_name">Фамилия</p>
              <MyInput 
                  label='Фамилия'
                  contentEditable
                  suppressContentEditableWarning
                  type="text" 
                  defaultValue={`${user.lastName}`} 
                  onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="person__info_row">
              <p className="person__info_name">E-mail</p>
              <MyInput 
                  label='E-mail'
                  disabled
                  type="text"
                  value={`${user.email}`}  
                />
            </div>
            <div className="person__info_row">
              <p className="person__info_name">Пароль</p>
              <InputPassword 
                defaultValue={`${user.password}`}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="person__info_row">
              <p className="person__info_name">ID</p>
              <MyInput 
                  label='ID'
                  disabled
                  type="text" 
                  value={`${user._id}`} 
                />
            </div>
            <div className="person__info_row">
              <p className="person__info_name">Одобрен</p>
              <ApprovedSelect
                  value={checkApproved(user.approved)} 
                  onChange={(e) => setApproved(e.target.value)}
                />
            </div>
            <div className="person__btn_wrap">
            <button
                className="btn"
                onClick={saveChange}
                >Сохранить изменения</button>
            </div>
          </div>
        </div>

      </div>
  )
}


