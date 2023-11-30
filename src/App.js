import React, { useState } from 'react';
import { Container, Box, CircularProgress, Typography } from '@mui/material';
import './App.css';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import ErrorBanner from './ErrorBanner';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (city) => {
        setLoading(true);
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede');
                }
                return response.json();
            })
            .then(data => {
                if (data.cod !== 200) {
                    throw new Error(data.message);
                }
                setWeatherData(data);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                setWeatherData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const clearError = () => {
        setError('');
    };

    const clearWeatherData = () => {
        setWeatherData(null);
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="center" py={4}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Previsão do Tempo
                </Typography>
                <SearchBar onSearch={handleSearch} />
                {loading && <CircularProgress size={24} sx={{ alignSelf: 'center', my: 2 }} />}
                {error && <ErrorBanner errorMessage={error} clearError={clearError} />}
                {weatherData ? (
                    <WeatherDisplay weatherData={weatherData} clearWeatherData={clearWeatherData} />
                ) : (
                    !loading && !error && (
                        <Typography variant="subtitle1" align="center" mt={2}>
                            Insira o nome de uma cidade para ver a previsão do tempo.
                        </Typography>
                    )
                )}
            </Box>
        </Container>
    );
}

export default App;
