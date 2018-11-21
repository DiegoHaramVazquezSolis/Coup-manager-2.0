import React from 'react';
import Card from '../../Components/Card/Card';
import CardHeader from '../../Components/Card/CardHeader';
import CardBody from '../../Components/Card/CardBody';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CardFooter from '../../Components/Card/CardFooter';
import Button from '../../Components/CustomButtons/Button';

const RegistroCapitanView = ({email, password, confirmPassword, name, phone, onChange, signUpWithEmail})  => {
    return (
        <Card>
            <CardHeader color="primary">Ingresa tus datos</CardHeader>
            <form onSubmit={signUpWithEmail}>
                <CardBody>
                    <CustomInput 
                        labelText="Nombre completo"
                        id="name"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={name}
                        onChange={onChange}
                        required={true}
                        type="text" />
                    <CustomInput 
                        labelText="Numero de telefono (opcional)"
                        id="phone"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={phone}
                        onChange={onChange}
                        required={false}
                        type="text" />
                    <CustomInput
                        labelText="Correo electronico"
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={email}
                        onChange={onChange}
                        required={true}
                        type="email"/>
                    <CustomInput 
                        labelText="Contraseña"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={password}
                        onChange={onChange}
                        required={true}
                        type="password" />
                    <CustomInput 
                        labelText="Confirma tu contraseña"
                        id="confirmPassword"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={confirmPassword}
                        onChange={onChange}
                        required={true}
                        type="password" />
                </CardBody>
                <CardFooter>
                    <Button type="submit" color="">Listo!</Button>
                </CardFooter>
            </form>
        </Card>
    );
}

export default RegistroCapitanView;