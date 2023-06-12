import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MyInput from '../components/UI/inputs/input/MyInput';
import StatusSelect from '../components/UI/selects/statusSelect/StatusSelect'
import { useActions } from '../hooks/useAction';
import TypeSelect from '../components/UI/selects/typeSelect/TypeSelect'
import PersonSelect from '../components/UI/selects/personSelect/PersonSelect'

export default function OneCase() {
  const params = useParams();
  const caseId = params.id.replace(/'/g, '');
  const {error, loading, user} = useSelector(state => state.userid);
  const {values} = useSelector(state => state.change);
  const {fetchUserId, fetchChange} = useActions()

  const [statusIn, setStatus] = useState('');
  const [ownerFullNameIn, setOwnerFullName] = useState('');
  const [typeIn, setType] = useState('');
  const [colorIn, setColor] = useState('');
  const [dateIn, setDate] = useState('');
  const [officerIn, setOfficer] = useState('');
  const [descriptionIn, setDescription] = useState('');
  const [resolutionIn, setResolution] = useState('');

  const [statusDone, setStatusDone] = useState(true);

  useEffect(() => {
      fetchUserId(localStorage.getItem('myToken'), 'get', `https://sf-final-project-be.herokuapp.com/api/cases/`, caseId);
    }, [])

    function checkApproved(approv, stat) {
      if (approv) {
        return approv
      } else {
        return stat
      }
    }


  const saveChange = () => {

    if (statusIn !== user.status) {
      values.status = statusIn
    }
    values.clientId = user.licenseNumber
    if (ownerFullNameIn !== user.ownerFullName) {
      values.ownerFullName = ownerFullNameIn
    }
    if (typeIn !== user.type) {
      values.type = typeIn
    }
    if (colorIn !== user.color) {
      values.color = colorIn
    }
    if (dateIn !== user.date) {
      values.date = dateIn
    }
    if (officerIn !== user.officer) {
      values.officer = officerIn
    }
    if (descriptionIn !== user.description) {
      values.description = descriptionIn
    }
    if (resolutionIn !== user.resolution) {
      values.resolution = resolutionIn
    }
    fetchChange(values, 'https://sf-final-project-be.herokuapp.com/api/cases/', caseId, localStorage.getItem('myToken'))
  }


function changeStatus(e) {
  const value = e.target.value
  setStatus(value)
  if(value === 'done') {
    alert('Оставьте резолюцию и сохраните')
    setStatusDone(false)
  } else {
    setStatusDone(true)
  }
}
  if (loading) {
    return (
      <main className="main">
      <div className='container container-person'>
      <h1 className="page__title">Карточка сообщения</h1>
      <p>Идет загрузка...</p>
      </div>
    </main>
    )
  }
  if (error) {
    return (
      <main className="main"> 
      <div className='container container-person'>
      <h1 className="page__title">Карточка сообщения</h1>
      <p>Произошла ошибка, повторите позже</p>
      </div>
    </main>
    )
  }

    return (
      <div className='container container-person'>
        <h1 className="page__title">Карточка сообщения</h1>
        
        <div className="case__wrap">
          <div className="case__info">
            <div className="person__info_row">
            <StatusSelect 
              required
              defaultValue={checkApproved(user.status, statusIn)} 
              onChange={changeStatus}
            />
            </div>
            <div className="person__info_row">
              <MyInput 
                  label='Ключ пользователя'
                  disabled
                  type="text" 
                  value={`${user.licenseNumber}`}
                />
            </div>
            <div className="person__info_row">
              <MyInput 
                  label='ФИО'
                  contentEditable
                  suppressContentEditableWarning
                  type="text" 
                  defaultValue={`${user.ownerFullName}`} 
                  onChange={(e) => setOwnerFullName(e.target.value)}
                />
            </div>
            <div className="person__info_row">
            <TypeSelect 
                  required
                  defaultValue={checkApproved(user.type, typeIn)}
                  onChange={(e) => setType(e.target.value)}
                />
            </div>
            <div className="person__info_row">
              <MyInput 
                  label='Цвет'
                  contentEditable
                  suppressContentEditableWarning
                  type="text" 
                  defaultValue={`${user.color}`}
                  onChange={(e) => setColor(e.target.value)} 
                />
            </div>
            <div className="person__info_row">
              <MyInput 
                    type="date"
                    format={'DD/MM/YYYY'}
                    label='Дата'
                    value={`${user.date?.split('T')[0]}`}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true
                    }}
                />
            </div>
            <div className="person__info_row">
            <PersonSelect
                required
                value={checkApproved(user.officer, officerIn)}
                onChange={(e) => setOfficer(e.target.value)}
                />
            </div>
            <div className="person__info_row">
              <MyInput 
                  label='Описание'
                  contentEditable
                  suppressContentEditableWarning
                  type="text" 
                  defaultValue={`${user.description}`} 
                  onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="person__info_row">
              <MyInput 
                  disabled = {statusDone}
                  label='Резолюция'
                  contentEditable
                  suppressContentEditableWarning
                  type="text" 
                  defaultValue={`${user.resolution}`} 
                  onChange={(e) => setResolution(e.target.value)}
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


