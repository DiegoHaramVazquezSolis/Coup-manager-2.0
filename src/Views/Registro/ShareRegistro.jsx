import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import CardHeader from '../../Components/Card/CardHeader';
import CardBody from '../../Components/Card/CardBody';
import Button from '../../Components/CustomButtons/Button';
import { teamsRef } from '../../services/Database';
import CardFooter from '../../Components/Card/CardFooter';

class ShareRegistro extends React.Component {
    state = {
        copySuccess: 'Copiar enlace'
    };

    makeid = ()  => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 16; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copiado!' });
    }

    render(){
        var enlace = this.makeid();
        if (this.props.fetched) {
            teamsRef.child(this.props.teamName.trim().toLowerCase()).update({url: enlace});
            return (
                <Card>
                    <CardHeader color="primary">Invita a tu equipo a unirse</CardHeader>
                    <CardBody>
                        <center>
                            <a target="_blank" rel="noopener noreferrer" href="fb-messenger://share/?link= https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fsharing%2Freference%2Fsend-dialog&app_id=1874184469317205">
                                <Button type="button">
                                        Compartir por messenger
                                </Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">
                                <Button type="button">
                                        Compartir por whastapp
                                </Button>
                            </a>
                            <br/>
                            {document.queryCommandSupported('copy') &&
                            <Button type="button" onClick={this.copyToClipboard}>
                                {this.state.copySuccess}
                            </Button>
                            
                            }
                            <br/>
                            <input
                                ref={(textarea) => this.textArea = textarea}
                                value={enlace}
                                style={{border: 0}}
                            />
                        </center>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit">
                            ¡Terminar registro!
                        </Button>
                    </CardFooter>
                </Card>
            );   
        }else {
            return(
                <h3>Cargando</h3>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        teamName: state.team.data.name,
        fetched: state.team.data.name !== undefined,
    }
}

export default ShareRegistro = connect(mapStateToProps)(ShareRegistro);