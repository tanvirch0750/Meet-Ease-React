import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './components/ui/admin/theme-provider.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { Toaster } from './components/ui/toaster.tsx';
import ReactErrorBoundary from './components/eror-boundary/ReactErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <ReactErrorBoundary>
          <App />
        </ReactErrorBoundary>
        <Toaster />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
