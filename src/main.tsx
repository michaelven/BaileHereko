import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import './main.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from './service/graphql/client.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
);
