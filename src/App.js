import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Grid, IconButton, Paper, Step, StepButton, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const Dummy = {
  AppNotification: true,
  user_id: 1,
  webNotification: true,
  Duration: 60,
  emailNotification: true,
  SpeedThresholdValue: 100,
  status: true,
  imei: '350424068840089',
  emailIDs: "['hkarthik97@gmail.com','karthik@zeddigital.net']",
};
function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState({});
  const [completed, setCompleted] = useState({});
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    if (activeStep < 3 && activeStep > 0) {
      setActiveStep(prev => prev + 1);
    }
  };
  const handleStep = step => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const postData = () => {
    // axios.post('https://gps.zig-app.com/api/OverspeedAlert', Dummy);
    console.log('jvbvb');
  };
  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2}>
        {' '}
        <Grid item md={12} sm={12} sx={{ display: 'flex', width: '100%', alignItems: 'center', bgcolor: '#017b80', p: 1 }}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography>Something</Typography>
        </Grid>
        <Grid item md={12} sm={12} sx={{ m: 1 }}>
          <Paper sx={{ m: 0, p: 1 }}>
            <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color='inherit' onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>
        <Grid item sm={12} md={12}>
          {activeStep == 1 && (
            <Box sx={{ width: '100%' }}>
              <Paper elevation={3} sx={{ width: '100%' }}>
                <Typography sx={{ color: '#9c9c9c' }}> Catogory</Typography>
                <Typography> OverSpped Alert</Typography>
              </Paper>
              <Grid item md={12} sm={12} sx={{ bgcolor: '#f5f5f5', my: 1 }}>
                <Box sx={{ height: '12px' }}></Box>
              </Grid>
              <Paper></Paper>
            </Box>
          )}
          {activeStep == 2 && <Box></Box>}
        </Grid>
        <Grid item sm={12} md={12}>
          {activeStep === 1 && (
            <Button onClick={handleNext} variant='contained' fullWidth sx={{ bgcolor: '#1dacb0', m: 1, p: 2 }}>
              Continue
            </Button>
          )}
          {activeStep === 2 && (
            <Button onClick={postData} variant='contained' fullWidth sx={{ bgcolor: '#1dacb0', m: 1, p: 2 }}>
              Create Subscription
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;