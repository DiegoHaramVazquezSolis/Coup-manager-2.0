import React from 'react';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import RegistroCapitanController from '../../Controllers/Registro/RegistroCapitanController';
import RegistroTeamController from '../../Controllers/Registro/RegistroTeamController';
import CompleteView from './CompleteView';
import ShareRegistro from './ShareRegistro';

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
                    {step === 0 ?
                        <RegistroCapitanController changeStep={changeStep} />
                    :
                        <CompleteView message="Paso 1 terminado correctamente" />
                    }
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{display: step === 0 ? 'none' : ''}}>
                    {step === 1 && step > 0 ?
                        <RegistroTeamController changeStep={changeStep} />
                    :
                        <CompleteView message="Paso 2 terminado correctamente" />
                    }
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{display: step === 2 ? '' : 'none'}}>
                    {step === 2 &&
                        <ShareRegistro />
                    }
                </GridItem>
                </GridContainer>
            </GridItem>
        </GridContainer>
    )
}

export default RegistroView;