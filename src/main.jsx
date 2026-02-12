import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './styles/reset.css';
import './styles/root.css';
import './styles/style.css';
import './styles/media.css';
import './styles/fonts.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
