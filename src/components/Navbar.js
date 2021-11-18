import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/imagenes/logo_white_large.png'
import { makeStyles } from '@material-ui/core/styles';
//import Avatars from './Avatar';

//Estilos para el appBar
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "black",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
        float: "Right"
    } ,
    image: {
        marginRight: "10px",
        width : "180px"
    },

}));

export default function Navbar() {
    const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className = {classes.appBar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src= {logo} className = {classes.image} alt = "Logo de shopLearning" />
          </IconButton>
          <div className = {classes.grow}>
            <div className = {classes.button}> 
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Portafolio</Button>
                <Button color="inherit">Equipo</Button>
                <Button color="inherit">Nosotros</Button>
                <Button color="inherit">Login</Button>
            </div> 
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
