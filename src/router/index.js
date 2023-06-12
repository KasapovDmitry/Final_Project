import MainPage from '../pages/MainPage';
import Message from '../pages/Message';
import Personal from '../pages/Officres';
import Officers from '../pages/OfficersId';
import Cases from '../pages/Cases';
import CasesId from '../pages/CasesId';
import Error from '../pages/Error';

import Login from '../pages/Login';
import Registration from '../pages/Registration';



export const privateRoutes = [
    {id: 1, path: '/', component: <MainPage />, exact: true},
    {id: 2, path: '/message', component: <Message />, exact: true},
    {id: 3, path: '/personal', component: <Personal />, exact: true},
    {id: 4, path: '/personal/:id', component: <Officers />, exact: true},
    {id: 5, path: '/cases', component: <Cases />, exact: true},
    {id: 6, path: '/cases/:id', component: <CasesId />, exact: true},
    {id: 7, path: '/login', component: <Login/>, exact: true},
    {id: 8, path: '/registration', component: <Registration />, exact: true},
    {id: 9, path: '*', component: <Error to="/error" replace />, exact: true}
]

export const publicRoutes = [
    {id: 1, path: '/', component: <MainPage />, exact: true},
    {id: 2, path: '/message', component: <Message />, exact: true},
    {id: 3, path: '/login', component: <Login/>, exact: true},
    {id: 4, path: '/registration', component: <Registration />, exact: true},
    {id: 5, path: '*', component: <Login to="/login" replace/>, exact: true}
]