import React from 'react'
import Button from '../atoms/Button/ButtonSubmit';
import Input from '../atoms/input/Input';
import Label from '../atoms/labels/Label';
import TitleContainer from '../atoms/title/Title';
import './container.css'

const Container = () => {
  return (
    <form onSubmit={alert("Espere al inicio de clases para iniciar sesion")}>
    <div className='container'>
            <TitleContainer/><br />
            <Input type="text" id="txtFirstN" placeholder="First Name" required/>  <t/>    
            <Input type="text" id="txtLastN" placeholder="Last Name" required/>
            <br/><br />
            <Input type="email" placeholder="Email" required></Input> <t/>
            <Input type="password" className="form-control" placeholder="Password" required></Input><br/><br />
            <Input type="number" placeholder="Phone number" required></Input> <t/>
            <Input type="text" placeholder="Choose your course" required></Input><br/><br />
            <br /><Input type="date" required></Input><br/><br />
            <Label>Elija su metodo de pago</Label><br />
            <Input type="select"><option>Credit card</option>
            <option>Debit card</option></Input>
                <t/>
            <Input type="number" placeholder="Card or account number" required></Input><br/><br />
        <Button type="submit" value="Login" ><a>Sign Up</a></Button>
            
    </div>
    </form>  
  )
}

export default Container;