import { AppBar, Box, Stack, SvgIcon, Toolbar } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <Box component={'header'}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(18, 24, 41, 1)',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '4rem',
          }}
        >
          <Link to={'/'}>
            <SvgIcon>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z"
                  fill="#4BB7FD"
                />
                <path
                  d="M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z"
                  fill="#7B6EF6"
                />
              </svg>
            </SvgIcon>
          </Link>
          <Box>
            <Stack
              spacing={1}
              direction="row"
              gap={4}
              width={'100%'}
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
              }}
            >
              <Link
                to={'/anime'}
                style={{
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                Anime
              </Link>
              <Link
                to={'/manga'}
                style={{
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                Manga
              </Link>
              <Link
                to={'/favorites'}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                Favorites
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
