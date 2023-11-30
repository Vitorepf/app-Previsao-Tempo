import React from 'react';
import { Box, Typography, Paper, useTheme, styled } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  maxWidth: '100%', 
  borderRadius: theme.shape.borderRadius,
  borderRadius: '32px',
  boxShadow: theme.shadows[7],
}));

const WeatherDisplay = ({ weatherData }) => {
  const theme = useTheme();

  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" gutterBottom>
          {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Temperatura: {weatherData.main.temp} °C
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Umidade: {weatherData.main.humidity}%
        </Typography>
        <Typography variant="subtitle1">
          {weatherData.weather[0].description}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default WeatherDisplay;
