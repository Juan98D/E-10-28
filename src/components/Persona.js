import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import '../App.css';

const steps = [
  {
    label: 'Juan Pablo Borrero Rivas',
    description: 'Integrante del grupo 10 de MISIONTIC, perteneciente al Development team; encargado de realizar la parte del front y la comunicacion entre el front y el back',
    image : "https://github.com/Juan98D/E-10-28/blob/main/src/assets/imagenes/CC_1143875722_foto%20(1).jpg?raw=true"
  },
  {
    label: 'Cristian',
    description:
      'Integrante del grupo 10 de MISIONTIC, Scrum Master del equipo, encargado de dar apoyo a los integrantes del grupo y a realizar toda la documentacion del proyecto.',
    image: 'https://github.com/Juan98D/E-10-28/blob/main/src/assets/imagenes/Cristian.jpeg?raw=true'
  },
  {
    label: 'Jesus',
    description: 'Integrante del grupo 10 de MISIONTIC, encargado de realizar la documentación y dar apoyo en la parte de frontend del aplicativo',
              
  },
  {
    label: 'Yeison',
    description: 'Integrante del grupo 10 de MISIONTIC, encargado de dar apoyo tanto en la parte del backend y en la documentación del proyecto'
  }
  
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography >{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 125, maxWidth: 400, width: '100%', p: 0 }}>
        {steps[activeStep].description}
      </Box>
      <img src={steps[activeStep].image} alt="cohete" className = "imagenP"></img>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
