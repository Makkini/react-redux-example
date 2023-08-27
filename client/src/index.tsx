import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@/app/providers/ThemeProvider';
import App from '@/app/App';
import {StoreProvider} from '@/app/providers/StoreProvider';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Container is empty');
}
const root = createRoot(container);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
);

