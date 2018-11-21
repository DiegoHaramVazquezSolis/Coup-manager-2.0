import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistroCapitanView from './../../Views/Registro/RegistroCapitanView';
import { createUserWithEmail } from '../../redux/actions/userActions';
import { INVALID_EMAIL, ALREADY_IN_USE, WEAK_PASSWORD } from '../../Constants/AuthErrorConstants';

class RegistroCapitanController extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: ''
    };

    signUpWithEmail = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            this.props.signUpWithEmail(this.state.email, this.state.password, this.state.name, this.state.phone)
            .then((ok) => {
                this.props.changeStep();
            }, (e) => {
                switch (e.code) {
                    case INVALID_EMAIL:
                        alert("Dirección de email invalida");
                        break;
                    case ALREADY_IN_USE:
                        alert("Este correo ya ha sido utilizado en otra cuenta");
                        break;
                    case WEAK_PASSWORD:
                        alert("La contraseña debe contener por lo menos 6 caracteres");
                        break;
                    default:
                        alert("Error al registrarse");
                        break;
                }
            });
        }else {
            alert("Las contraseñas no coinciden");
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <RegistroCapitanView
            signUpWithEmail={this.signUpWithEmail}
            onChange={this.onChange}
            {...this.state} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpWithEmail: (email, password, name, phone) => createUserWithEmail(email, password, name, phone)(dispatch)
    }
}

export default RegistroCapitanController = connect(null, mapDispatchToProps)(RegistroCapitanController);
