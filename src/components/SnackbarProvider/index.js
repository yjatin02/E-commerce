// components/SnackbarProvider.js
import React from 'react';
import { SnackbarProvider as NotistackProvider } from 'notistack';

const SnackbarProvider = ({ children }) => {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
