import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistroView from '../Views/RegistroView';
import { createUserWithEmail } from '../redux/actions/userActions';

class RegistroController extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: '',
        teamName: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signUpWithEmail = () => {
        this.props.signUpWithEmail(this.state.email, this.state.password);
    }

    render() {
        return (
            <RegistroView
            onChange={this.onChange}
            signUpWithEmail={this.signUpWithEmail}
            {...this.state} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpWithEmail: (email, password) => createUserWithEmail(email, password)(dispatch)
    }
}

export default RegistroController = connect(null, mapDispatchToProps)(RegistroController);
