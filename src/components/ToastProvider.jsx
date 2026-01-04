import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                style: {
                    background: '#18181b', // zinc-900
                    color: '#fff',
                    border: '1px solid #27272a', // zinc-800
                },
                success: {
                    iconTheme: {
                        primary: '#facc15', // yellow-400
                        secondary: '#000',
                    },
                },
            }}
        />
    );
};

export default ToastProvider;
