import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth0 } from '@auth0/auth0-react';
import WelcomePage from 'app/components/WelcomePage/WelcomePage';
import SideBar from '../../components/SideBar/Sidebar';
import { Box, CircularProgress } from '@mui/joy';
export function HomePage() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            minHeight: '100dvh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : isAuthenticated ? (
        <SideBar />
      ) : (
        <WelcomePage />
      )}
    </>
  );
}
