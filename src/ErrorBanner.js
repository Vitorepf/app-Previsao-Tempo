import React from 'react';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ErrorBanner = ({ errorMessage, clearError }) => {
    if (!errorMessage) return null;

    return (
        <Alert
            severity="error"
            action={
                <IconButton
                    color="inherit"
                    size="small"
                    onClick={clearError}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
        >
            <AlertTitle>Erro</AlertTitle>
            {errorMessage} — <strong>verifique e tente novamente!</strong>
        </Alert>
    );
};

export default ErrorBanner;
