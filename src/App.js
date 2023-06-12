import React, { useEffect, useState } from 'react';
import MyHeader from './components/header/MyHeader';
import MyFooter from './components/footer/MyFooter';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthContext } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [myToken, setMyToken] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('myToken')) {
      setIsAuth(true);
    }
  }, []);
  
  return (
    <div className="sait">
      <Provider 
      store={store}
      >
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          myToken,
          setMyToken
        }}>
          <MyHeader />
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
          <MyFooter />
        </AuthContext.Provider>  
      </Provider>
    </div>
  );
}

export default App;
