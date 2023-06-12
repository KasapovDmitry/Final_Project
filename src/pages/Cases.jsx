import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useAction';

export default function AllCases() {
  const navigate = useNavigate();
  const {error, loading, cases, token} = useSelector(state => state.caseall);
  const {user} = useSelector(state => state.remove);

  const {fetchAllCases, fetchRemove} = useActions()


  useEffect(() => {
    fetchAllCases(localStorage.getItem('myToken'), 'get', 'https://sf-final-project-be.herokuapp.com/api/cases/');
  }, [error])

  function removeUser(id) {
        const delId = id;
    fetchRemove('https://sf-final-project-be.herokuapp.com/api/cases/', delId, localStorage.getItem('myToken'))

    fetchAllCases(localStorage.getItem('myToken'), 'get', 'https://sf-final-project-be.herokuapp.com/api/cases/');
    alert(`Сообщение ${id} удалено`);
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
      <h1 className="page__title">Все кражи</h1>
      <div className="table_wrapper">
        <table className="iksweb">
          <tbody>
            <tr>
              <th className='table__id'>Смотреть</th>
              <th className='table__id'>id</th>
              <th className='table__id'>Статус</th>
              <th className='table__id'>Дата</th>
              <th className='table__name'>ФИО</th>
              <th className='table__email'>Тип</th>
              <th className='table__check'>Цвет</th>
              <th className='table__del'>Описание</th>
              <th className='table__del'>Удалить</th>
            </tr>

            {cases.map(cases => 
            <tr key={cases._id}>
              <td className='centr'>
                <button
                  className="btn btn__loop"
                  onClick={() => navigate(`/cases/${cases._id}`)}
                >
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 3.23077H0V1.07692H5.5V3.23077ZM5.5 6.46154H0V8.61538H5.5V6.46154ZM20.449 14L16.236 9.87538C15.356 10.4354 14.322 10.7692 13.2 10.7692C10.164 10.7692 7.7 8.35692 7.7 5.38462C7.7 2.41231 10.164 0 13.2 0C16.236 0 18.7 2.41231 18.7 5.38462C18.7 6.48308 18.359 7.49538 17.787 8.34615L22 12.4815L20.449 14ZM16.5 5.38462C16.5 3.60769 15.015 2.15385 13.2 2.15385C11.385 2.15385 9.9 3.60769 9.9 5.38462C9.9 7.16154 11.385 8.61538 13.2 8.61538C15.015 8.61538 16.5 7.16154 16.5 5.38462ZM0 14H11V11.8462H0V14Z" fill="white"/>
                  </svg>
                </button>
              </td>
              <td>{cases._id}</td>
              <td>{cases.status}</td>
              <td>{cases.date.split('T')[0]}</td>
              <td>{cases.ownerFullName}</td>
              <td>{cases.type}</td>
              <td>{cases.color}</td>
              <td>{cases.description}</td>
              <td className='centr'>
                <button
                  className="btn btn__loop"
                  onClick={() => removeUser(cases._id)}
                >
                  <svg className="product-remove-svg" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.125C8.74347 0.124973 9.45804 0.412958 9.99373 0.928506C10.5294 1.44405 10.8446 2.14707 10.873 2.89L10.875 3H14.5C14.6599 3.00052 14.8134 3.06227 14.9292 3.17256C15.0449 3.28285 15.114 3.4333 15.1222 3.59295C15.1304 3.7526 15.0771 3.90933 14.9732 4.03089C14.8694 4.15245 14.723 4.22961 14.564 4.2465L14.5 4.25H13.9545L13.103 15.535C13.0626 16.0694 12.8219 16.5688 12.4289 16.9332C12.036 17.2975 11.5199 17.5 10.984 17.5H5.016C4.48011 17.5 3.964 17.2975 3.57105 16.9332C3.17811 16.5688 2.93735 16.0694 2.897 15.535L2.045 4.25H1.5C1.34527 4.25007 1.19602 4.19274 1.08112 4.08911C0.966218 3.98548 0.893844 3.84292 0.878 3.689L0.875 3.625C0.875 3.3015 1.121 3.035 1.436 3.0035L1.5 3H5.125C5.125 2.2375 5.4279 1.50624 5.96707 0.967068C6.50623 0.427901 7.2375 0.125 8 0.125ZM12.701 4.25H3.299L4.144 15.441C4.16064 15.6609 4.25971 15.8665 4.42139 16.0165C4.58308 16.1665 4.79545 16.2499 5.016 16.25H10.984C11.2046 16.25 11.4171 16.1666 11.5789 16.0166C11.7407 15.8666 11.8399 15.661 11.8565 15.441L12.7015 4.25H12.701ZM9.625 6.875C9.9485 6.875 10.215 7.121 10.247 7.436L10.25 7.5V13C10.2507 13.1607 10.1896 13.3155 10.0791 13.4323C9.96871 13.5491 9.81754 13.6188 9.65704 13.6271C9.49653 13.6353 9.33902 13.5814 9.21723 13.4766C9.09543 13.3717 9.01871 13.2239 9.003 13.064L9 13V7.5C9 7.155 9.28 6.875 9.625 6.875ZM6.375 6.875C6.6985 6.875 6.965 7.121 6.997 7.436L7 7.5V13C7.00075 13.1607 6.93955 13.3155 6.82913 13.4323C6.71871 13.5491 6.56755 13.6188 6.40704 13.6271C6.24654 13.6353 6.08903 13.5814 5.96723 13.4766C5.84543 13.3717 5.76871 13.2239 5.753 13.064L5.75 13V7.5C5.75 7.155 6.03 6.875 6.375 6.875ZM8 1.375C7.58493 1.37497 7.18558 1.53378 6.88388 1.81884C6.58218 2.10389 6.401 2.4936 6.3775 2.908L6.375 3H9.625C9.625 2.56902 9.45379 2.1557 9.14905 1.85095C8.8443 1.54621 8.43098 1.375 8 1.375Z" fill="white"></path>
                  </svg>
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    )
  }


