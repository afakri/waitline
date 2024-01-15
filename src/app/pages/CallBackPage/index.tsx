/**
 *
 * CallBackPage
 *
 */
import Sidebar from 'app/components/SideBar/Sidebar';
import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { Typography } from '@mui/joy';

interface Props {}

export function CallBackPage(props: Props) {
  const { error } = useAuth0();
  if (error) {
    return (
      <Box>
        <Typography level="h1">Error</Typography>
        <Typography variant="outlined" level="body-lg" color="danger">
          {error.message}
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Sidebar />
    </>
  );
}
