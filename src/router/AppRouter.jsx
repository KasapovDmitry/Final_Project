import React, { useContext, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index.js';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { AuthContext } from '../context/index.js';

export default function AppRouter() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {answer} = useSelector(state => state.isAuth);
  const {values} = useSelector(state => state.auth);
  const {fetchIsAuth, fetchAuth} = useActions()

  useEffect(() => {
      if (localStorage.getItem('myToken') !== null) {
        // проверка токена
       fetchIsAuth(localStorage.getItem('myToken'));
       // если ответ не "ОК", обновляем токен
       if (answer === null) {
        values.email = 'dkasapov@mail.ru'
        values.password = '01091979'
        fetchAuth(values, 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in')
        }
      } else {
        setIsAuth(false)
      }
  },[])
  

return (
  isAuth
    ?  <Routes>
        {privateRoutes.map(route => 
          <Route 
            key={route.id}
            element={route.component} 
            path={route.path} 
            exact={route.exact}
          />
        )}
    </Routes>
 : 
      <Routes>
          {publicRoutes.map(route => 
            <Route 
              key={route.id}
              element={route.component} 
              path={route.path} 
              exact={route.exact}
            />
          )}
      </Routes>
  )
}

