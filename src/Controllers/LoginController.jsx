import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from './../Views/LoginView';
import { signInWithEmail } from '../redux/actions/userActions';

class LoginController extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signInWithEmail = (e) => {
        e.preventDefault();
        this.props.signInWithEmail(this.state.email, this.state.password);
    }

    render() {
        return (
            <LoginView
            onChange={this.onChange}
            signInWithEmail={this.signInWithEmail}
            {...this.state} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithEmail: (email, password) => signInWithEmail(email, password)(dispatch)
    }
}

export default LoginController = connect(null, mapDispatchToProps)(LoginController);
