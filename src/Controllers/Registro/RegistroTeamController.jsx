import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistroTeamView from '../../Views/Registro/RegistroTeamView';
import { createTeam } from '../../redux/actions/teamActions';

class RegistroTeamController extends Component {
    state = {
        name: '',
        imagen: null,
        fileImage: null
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    loadImageToState = (event) => {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.setState({ imagen: e.target.result });
        }
        this.setState({ fileImage: event.target.files[0] });
        reader.readAsDataURL(event.target.files[0]);
    }

    createTeam = (e) => {
        e.preventDefault();
        this.props.createTeam(this.state.name, this.state.fileImage, () => {}, () => {}, this.props.captain);
        this.props.changeStep();
    }

    render() {
        return (
            <RegistroTeamView
            onChange={this.onChange}
            loadImageToState={this.loadImageToState}
            createTeam={this.createTeam}
            {...this.state} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTeam: (teamName, imageFile, onBegin, setProgress, CaptainData) => createTeam(teamName, imageFile, onBegin, setProgress, CaptainData)(dispatch)
    }
}

function mapStateToProps(state) {
    return {
        captain: state.user.data
    }
}

export default RegistroTeamController = connect(mapStateToProps, mapDispatchToProps)(RegistroTeamController);
