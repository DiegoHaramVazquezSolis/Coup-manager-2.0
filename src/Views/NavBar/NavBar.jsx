import React from 'react';
import { connect } from 'react-redux';
import NavLink from '../../Components/NavBar/NavLink';
import { withRouter, Link } from 'react-router-dom';
import { REGISTRO, LISTA, INICIO, SPONSORS } from "./NavigationConstants";
import NavLinkItem from '../../Components/NavBar/NavLinkItem';
import { closeSession } from '../../redux/actions/userActions';
import { ReactComponent as Logo} from './../../logo.svg';

class NavBar extends React.Component {
    state = {
        active: INICIO
    };

    componentWillMount() {
        this.setState({ active: this.props.location.pathname });
    }

    changeActive = (newPathName) => {
        this.setState({ active: newPathName });
    }

    close = (e) => {
        e.preventDefault();
        this.props.logOut();
        this.props.history.push(INICIO);
    }

    render() {
        if (localStorage.getItem('user')) {
            return (
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link className="navbar-brand" to="/">Master coup <Logo className="App-logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavLink to={LISTA} active={this.state.active} title="Lista de equipos" onClick={this.changeActive} />
                            <NavLink to={SPONSORS} active={this.state.active} title="Patrocinadores" onClick={this.changeActive} />
                            <NavLinkItem to={INICIO} active={this.state.active} title="Cerrar sesion" onLinkClicked={this.close} onClick={this.changeActive} />
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link className="navbar-brand" to="/">Master coup <Logo className="App-logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavLink to={INICIO} active={this.state.active} title="Inicio" onClick={this.changeActive} />
                            <NavLink to={REGISTRO} active={this.state.active} title="Registro" onClick={this.changeActive} />
                            <NavLink to={SPONSORS} active={this.state.active} title="Patrocinadores" onClick={this.changeActive} />
                        </ul>
                    </div>
                </nav>
            );
        }
    }
}

  function mapDispatchToProps(dispatch) {
      return {
          logOut: () => closeSession()(dispatch)
      }
  }

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}
  
export default NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
