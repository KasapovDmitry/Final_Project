import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function InputPassword(props) {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
      // const handleChange = (prop) => (event) => {
      //   setValues({ ...values, [prop]: event.target.value });
      // };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
  return (
    <FormControl sx={{width: '100%' }} variant="outlined">
    <InputLabel htmlFor="standard-adornment-password">Пароль*</InputLabel>
    <OutlinedInput
    type={values.showPassword ? 'text' : 'password'}
    {...props} 
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
            
          >
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
  )
}