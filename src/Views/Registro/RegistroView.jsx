import React from 'react';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import RegistroCapitanController from '../../Controllers/Registro/RegistroCapitanController';
import RegistroTeamController from '../../Controllers/Registro/RegistroTeamController';
import CompleteView from './CompleteView';

const RegistroView = ({step, changeStep})  => {
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                    {step === 0 &&
                        <GridItem xs={false} sm={false} md={4}>
                        </GridItem>
                    }
                <GridItem xs={12} sm={12} md={4}>
                    <RegistroCapitanController changeStep={changeStep} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{/*display: step === 0 ? 'none' : ''*/}}>
                    <RegistroTeamController changeStep={changeStep} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{display: step === 2 ? '' : 'none'}}>
                    <CompleteView message="Paso 3 terminado correctamente" />
                </GridItem>
                </GridContainer>
            </GridItem>
        </GridContainer>
    )
}

export default RegistroView;