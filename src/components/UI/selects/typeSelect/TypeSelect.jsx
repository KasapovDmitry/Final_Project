import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function TypeSelect(props) {
    
   
return (
    <FormControl fullWidth>
        <InputLabel>Тип*</InputLabel>
        <Select
        {...props} 
        >
        <MenuItem value={'sport'}>sport</MenuItem>
        <MenuItem value={'general'}>general</MenuItem>
        </Select>
    </FormControl>
    
  )
}
