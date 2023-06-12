import React, { useEffect} from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { useSelector } from 'react-redux'
import { useActions } from '../../../../hooks/useAction';

export default function PersonSelect(props) {
    const {users} = useSelector(state => state.user);
    const {fetchUsers} = useActions()
    useEffect(() => {
        if(localStorage.getItem('myToken')) {
            fetchUsers(localStorage.getItem('myToken'), 'get', 'https://sf-final-project-be.herokuapp.com/api/officers/');
        }
    }, [])



  return (
    <FormControl fullWidth>
        <InputLabel>Сотрудник</InputLabel>
            <Select
            {...props} 
            >
             {users.filter((user) => {
                return user.approved === true
             } ).map(userTrue =>(
                <MenuItem key={userTrue._id} value={userTrue._id}>{userTrue.lastName} {userTrue.firstName}</MenuItem>
                )
            )}
        </Select>
    </FormControl>
    
  )
}
