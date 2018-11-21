import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistroView from '../../Views/Registro/RegistroView';
import { createUserWithEmail } from '../../redux/actions/userActions';

class RegistroController extends Component {
    state = {
        step: 0
    };

    changeStep = () => {
        this.setState({ step: this.state.step + 1 });
    }

    signUpWithEmail = () => {
        this.props.signUpWithEmail(this.state.email, this.state.password);
    }

    render() {
        return (
            <RegistroView
            changeStep={this.changeStep}
            step={this.state.step} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpWithEmail: (email, password) => createUserWithEmail(email, password)(dispatch)
    }
}

export default RegistroController = connect(null, mapDispatchToProps)(RegistroController);
