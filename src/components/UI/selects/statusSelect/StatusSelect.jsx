import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function StatusSelect(props) {
    
   
return (
    <FormControl fullWidth>
        <InputLabel>Статус</InputLabel>
        <Select
        {...props} 
        >
        <MenuItem value={'new'}>new</MenuItem>
        <MenuItem value={'in_progress'}>in_progress</MenuItem>
        <MenuItem value={'done'}>done</MenuItem>
        </Select>
    </FormControl>
    
  )
}