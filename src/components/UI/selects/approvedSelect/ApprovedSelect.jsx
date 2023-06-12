import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function ApprovedSelect(props) {
    
   
return (
    <FormControl fullWidth>
        <InputLabel>Тип одобрения</InputLabel>
        <Select
        {...props} 
        >
        <MenuItem value={true}>Одобрен</MenuItem>
        <MenuItem value={false}>Не одобрен</MenuItem>
        </Select>
    </FormControl>
    
  )
}