import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        pt: 2
      }}
    >
      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="h6" component="div">
          Harish E
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item} 
            component={Link} 
            to={`/${item.toLowerCase()}`}
            onClick={toggleDrawer}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'primary.main',
              }
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                fontSize: { xs: '1rem', sm: '1.25rem' },
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              <b>Harish E</b>
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={`/${item.toLowerCase()}`}
                  sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight: 500,
                    position: 'relative',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
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
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'background.paper',
            color: 'text.primary',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 