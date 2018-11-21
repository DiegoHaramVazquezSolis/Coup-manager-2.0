import React from 'react';
import Card from '../../Components/Card/Card';
import CardHeader from '../../Components/Card/CardHeader';
import CardBody from '../../Components/Card/CardBody';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CardFooter from '../../Components/Card/CardFooter';
import Button from '../../Components/CustomButtons/Button';

const RegistroView = ({email, password, confirmPassword, name, phone, teamName, onChange, signUpWithEmail})  => {
    return (
        <GridContainer>
            <Card>
                <CardHeader color="primary">Bienvenido, registra a tu equipo</CardHeader>
                <CardBody>
                    <GridContainer>
                    <GridItem xs={4} sm={4} md={4} style={{display: 'none',}}>
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}>
                        <Card>
                            <CardHeader color="success">Ingresa tus datos</CardHeader>
                            <form>
                                <CardBody>
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
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}></GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </GridContainer>
    )
}

export default RegistroView;