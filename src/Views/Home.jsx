import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../Components/Grid/GridContainer';
import GridItem from '../Components/Grid/GridItem';
import Card from '../Components/Card/Card';
import CardHeader from '../Components/Card/CardHeader';
import CardBody from '../Components/Card/CardBody';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <GridContainer>
                    <GridItem xs={1} sm={1} md={1}></GridItem>
                    <GridItem xs={10} sm={10} md={10}>
                        <Card>
                            <CardHeader color="primary">
                                Hola
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <p>Bienvenido</p>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={1} sm={1} md={1}></GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default Home = withStyles(styles)(Home);
