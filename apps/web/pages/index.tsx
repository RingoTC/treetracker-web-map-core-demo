import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Button,
  CircularProgress,
  SvgIcon,
  TextField,
  Tooltip,
} from '@mui/material';
import { Paper, Box, Typography, Avatar } from '@mui/material';
import UserSvg from '../images/user.svg';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import currentUser from '../states/currentUser';
import { User } from 'demo-core/models/user/User';
import react from 'react';
import useLoginForm from 'demo-core/models/login/useLoginForm';

const Home: NextPage = () => {
  const router = useRouter();
  const loginForm = useLoginForm();
  const [user, setUser] = useRecoilState(currentUser);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Product+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Box
          sx={{
            padding: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100vh',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  marginTop: '3rem',
                }}
              >
                Sign In | test4rc
              </Typography>
              <Avatar
                sx={{
                  width: 104,
                  height: 104,
                  marginTop: '1.7rem',
                  backgroundColor: '#F3F6FF',
                }}
              >
                {/* MUI SVG Icon */}
                <SvgIcon
                  component={UserSvg}
                  sx={{
                    width: 49,
                    height: 49,
                  }}
                  viewBox="0 0 49 49"
                />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  marginTop: 13,
                }}
              >
                <Tooltip
                  open={true}
                  arrow
                  title="User name: admin, pwd: admin"
                  placement="top"
                >
                  <Typography variant="subtitle2">Name</Typography>
                </Tooltip>
                <TextField
                  sx={{
                    width: '100%',
                    marginTop: '0.5rem',
                    height: 60,
                    fontSize: '0.9rem',
                    backgroundColor: '#F3F6FF',
                  }}
                  variant="outlined"
                  placeholder="Enter your name"
                  value={loginForm.name}
                  onChange={(e) => loginForm.handleNameChange(e.target.value)}
                  error={!!loginForm.nameError}
                  helperText={loginForm.nameError}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  marginTop: 8,
                }}
              >
                <Typography variant="subtitle2">Password</Typography>
                <TextField
                  sx={{
                    width: '100%',
                    marginTop: '0.5rem',
                    height: 60,
                    fontSize: '0.9rem',
                    backgroundColor: '#F3F6FF',
                  }}
                  variant="outlined"
                  placeholder="*******"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    loginForm.handlePasswordChange(e.target.value)
                  }
                  error={!!loginForm.passwordError}
                  helperText={loginForm.passwordError}
                />
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              width: '100%',
              marginBottom: 2,
              height: 60,
              color: '#fff',
            }}
            variant="contained"
            disableElevation
            onClick={(e) =>
              loginForm.handleSubmit((user: User) => {
                console.log('user:', user);
                setUser(user);
                router.push('/home');
              })
            }
          >
            {loginForm.isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              'Continue'
            )}
          </Button>
        </Box>
      </main>
    </div>
  );
};

export default Home;
