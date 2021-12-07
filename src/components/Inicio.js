import React, { useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../assets/imagenes/abstract-light-blue-dots-in-circle-on-navy-background-vector.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles (theme=>({
    root: {
        backgroundImage:`url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        opacity: '0.9',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) +2 )]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        whidth: '100%',
        marginTop: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    },
    registrar: {
        margin: theme.spacing(0,11,1)
    }
}))

axios.defaults.withCredentials = true;

const Inicio = () => {
    //const [log, setLog] = useState({email: '', password: ''})  //creamos la contstante para saber los estados
    const classes = useStyles();
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    
    // const handleChange = (e) => { // El e nos trae todos los atributos del textfield
    //     console.log(e.target.value)
    //     setLog({
    //         ...log, //Los 3 puntos significa que vamos a mantener todo lo que esta en la contante body
    //         [e.target.name]: e.target.value
            
    //     })
    
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        axios.post('http://localhost:5000/auth/iniciar-sesion', { email, password } )
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error.response.data)
        })
        
    }

    return (
        <Grid container component = 'main' className = { classes.root }>
            <Container component = { Paper } elevation={5} maxWidth='xs' className = {classes.container}>
                <div className = { classes.div }>
                    <Avatar className = { classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component = 'h1' variant='h5'>Iniciar Sesion</Typography>
                    <form className={ classes.form} onSubmit = { handleSubmit }>
                        <TextField 
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Usuario'
                            name='email'
                            required='required'
                            value ={ email} //debe conincidir con el nombre de los textfield
                            onChange={ (e) => setEmail(e.target.value) } //Detecta cuando hay un cambio en el texfield
                        />
                         <TextField 
                            fullWidth
                            color='primary'
                            required='required'
                            type='password'
                            margin='normal'
                            variant='outlined'
                            label='Contraseña'
                            name='password'
                            value= { password }
                            onChange={ (e) => setPassword(e.target.value) 
                            }
                        />
                        <Button fullWidth variant='contained' color='primary' className={ classes.button} type = "submit">Ingresar</Button>
                        <Typography className={ classes.registrar }>Pulse <a href='/registrar'>aqui</a> para registrarse</Typography>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default Inicio