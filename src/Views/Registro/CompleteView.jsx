import React from 'react';
import Card from "../../Components/Card/Card";
import CardBody from '../../Components/Card/CardBody';
import CardAvatar from '../../Components/Card/CardAvatar';
import {ReactComponent as Check} from './../../assets/checked.svg';

const CompleteView = ({message}) => {
    return (
        <Card profile={true}>
            <CardAvatar profile>
                <Check />
            </CardAvatar>
            <CardBody>
                <h3>{message}</h3>
            </CardBody>
        </Card>
    )
}

export default CompleteView;