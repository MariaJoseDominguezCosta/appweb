import React from 'react'
import './buttonSubmit.css'

const Button = ({ ...props }) => {
  return(<button type="button" {...props} onClick={alert("Espere al inicio de clases para iniciar sesion")}/>) 
}

export default Button;