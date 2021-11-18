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
    description: 'Integrante del grupo 17 de MISIONTIC',
    image : "https://bn1304files.storage.live.com/y4mJf4aQCAwSQ7vWy7b2w5sNciber6ceMh5Prk-JdNOJRGuhbDXsLMYpI1TUvfWep1I9WsQ2WzwxVpRic8Njn6eMMCZAP--F2MHKmadK475Gv8JVAi9xxxaYDFctw6j7E4MVpax6mLJWvynjxFfHVkq2F9HBOLbVKlY4wbGWErpxUtFItShn6YdpFE2xnaVBBtZeMdQpuFMbsNLFPnGtTwYaWQ1dva7wdB71kV5lFVuMiI?encodeFailures=1&width=472&height=630"
  },
  {
    label: 'Cristian',
    description:
      'Integrante del grupo 17 de MISIONTIC.',
    image: 'https://bn1304files.storage.live.com/y4mQpT7xktgYWbCXBtX-fLT8Uzqq7yNXiko35hOp6vhB9eKEfNS8OzvGkIwKMBqTpqJLlRNJwEJUSFYuRKup35HEmVK-64lclRvbruWfoQSDSrZJFQ22nij39RgDaGLDrjFlqyoyjHvU-AZKYCfUzVbGNO83yq3wScibURSue2-kO00Us9hA1oL4CfrJ-jPgbGZT3SotUXYTB-SLZITi0Fv4skvx474XI3VOVW1W-kQsYo?encodeFailures=1&width=352&height=432'
  },
  {
    label: 'Jesus',
    description: 'Integrante del grupo 17 de MISIONTIC',
              
  },
  {
      label: "Sebastian",
      description:'Integrante del grupo',
      image: ''
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
