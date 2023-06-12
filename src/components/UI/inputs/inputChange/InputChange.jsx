import React from 'react'
import TextField from '@mui/material/TextField';
export default function MyInput(props) {
  return (
    <TextField 
      className="input__feild" 
      {...props} 
    />
  )
}