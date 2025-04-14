import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import profilePic from '../assets/img/harish1.jpg';

const Header: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src={profilePic}
              alt="Harish"
              sx={{ 
                width: 56, 
                height: 56,
                border: '2px solid',
                borderColor: 'primary.main',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(144, 202, 249, 0.5)',
                }
              }}
            />
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',
                fontWeight: 600,
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              <b>Harish E</b>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'primary.main',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 