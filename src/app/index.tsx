/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { Auth0Provider } from '@auth0/auth0-react';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import QueuePage from './pages/QueuesPage';
import QueueBoard from './pages/QueueBoard';
import { CssVarsProvider, CssBaseline, Box } from '@mui/joy';
import { Auth0ProviderWithNavigate } from './components/Authentication/Auth0ProviderWithNavigate';
import { AuthenticationGuard } from './components/Authentication/AuthenticationGuard';
import Sidebar from './components/SideBar/Sidebar';
import { CallBackPage } from './pages/CallBackPage';

export function App() {
  const { i18n } = useTranslation();

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Auth0ProviderWithNavigate>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/queues"
              element={<AuthenticationGuard component={QueuePage} />}
            />
            <Route
              path="/board"
              element={<AuthenticationGuard component={QueueBoard} />}
            />
            <Route path="/callback" element={<CallBackPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Auth0ProviderWithNavigate>
        <GlobalStyle />
      </BrowserRouter>
    </CssVarsProvider>
  );
}
