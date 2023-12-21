import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import './styles/Global/FontsAndText.css';
import './styles/Global/PaddingAndMargin.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);