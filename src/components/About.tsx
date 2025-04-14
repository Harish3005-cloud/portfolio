import React from 'react';
import { Container, Typography, Box, Avatar, Paper, Grid } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const About: React.FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            margin: '0 auto',
            mb: 3
          }}
          alt="Profile Picture"
          src="/profile.jpg"
        />
        <Typography variant="h4" gutterBottom>
          Harish E
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Tech Enthusiast | Designer | Developer
        </Typography>
        <Box sx={{ mb: 4 }}>
          <GitHub sx={{ mx: 1, cursor: 'pointer' }} />
          <LinkedIn sx={{ mx: 1, cursor: 'pointer' }} />
        </Box>

        <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 4 }}>
          Get To Know More About Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Details about your experience...
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Details about your education...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 