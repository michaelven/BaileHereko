import {
  AppBar,
  Box,
  Stack,
  SvgIcon,
  Toolbar,
  Menu,
  IconButton,
  MenuItem,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import React, { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const lang = (event.target as HTMLElement).getAttribute('value');
    if (lang) i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

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
              sx={{
                width: '100%',
                flexDirection: 'row',
                fontFamily: 'Poppins',
                fontWeight: 600,
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Link
                to={'/anime'}
                style={{
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                {t('anime')}
              </Link>
              <Link
                to={'/manga'}
                style={{
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                {t('manga')}
              </Link>
              <Link
                to={'/favorites'}
                style={{
                  color: 'rgba(168, 174, 191, 1)',
                  textDecoration: 'none',
                }}
              >
                {t('favorites')}
              </Link>
              <IconButton
                aria-label="language"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <LanguageIcon color="primary" />
              </IconButton>
              <Menu
                open={open}
                anchorEl={anchorEl}
                onClick={handleClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(23, 29, 47, 1)',
                    color: 'rgba(168, 174, 191, 1)',
                  },
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="ru">Russian</MenuItem>
              </Menu>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
