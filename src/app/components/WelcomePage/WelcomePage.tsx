/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';
import { useAuth0 } from '@auth0/auth0-react';

export default function WelcomePage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  const handleSignUp = async () => {
    await loginWithRedirect({
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  };
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        The power to do more
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        A large headlinerer about our product features & services
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        A descriptive secondary text placeholder. Use it to explain your
        business offer better.
      </Typography>
      <Button
        size="lg"
        onClick={handleSignUp}
        endDecorator={<ArrowForward fontSize="large" />}
      >
        Get Started
      </Button>
      <Typography>
        Already a member?{' '}
        <Button variant="outlined" onClick={handleLogin}>
          {' '}
          Sign in{' '}
        </Button>
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        HeroLeft01
      </Typography>
    </TwoSidedLayout>
  );
}
