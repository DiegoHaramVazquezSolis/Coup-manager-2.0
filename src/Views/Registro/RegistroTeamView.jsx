import React from 'react';
import Card from "../../Components/Card/Card";
import CardBody from '../../Components/Card/CardBody';
import CardHeader from '../../Components/Card/CardHeader';
import CustomInput from '../../Components/CustomInput/CustomInput';
import Button from '../../Components/CustomButtons/Button';
import CardFooter from '../../Components/Card/CardFooter';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import MediaCard from '../../Components/MediaCard/MediaCard';

const RegistroTeamView = ({name, imagen, onChange, loadImageToState, createTeam})  => {
    return (
        <Card>
            <CardHeader color="primary">Ingresa los datos de tu equipo</CardHeader>
            <form onSubmit={createTeam}>
                <CardBody>
                    <CustomInput
                        labelText="Nombre del equipo"
                        id="name"
                        formControlProps={{
                            fullWidth: true
                        }} 
                        value={name}
                        onChange={onChange}
                        required={true}
                        type="text" />
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <input 
                                    accept="image/*" 
                                    onChange={loadImageToState}
                                    id={"raised-button-file"+1}
                                    style={{ display: 'none' }}
                                    type="file" 
                                    />
                                <label htmlFor={"raised-button-file"+1}>
                                    <Button raised component="span" style={{backgroundColor: "#999999", color: "white", fontSize: "12px"}}> 
                                        Sube el logo de tu equipo
                                    </Button>
                                </label>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <MediaCard image={imagen} />
                            </GridItem>
                        </GridContainer>
                </CardBody>
                <CardFooter>
                    <Button type="submit">Continuar</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default RegistroTeamView;