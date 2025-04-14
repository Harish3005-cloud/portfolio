import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { Email, LinkedIn } from '@mui/icons-material';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4
        }}>
          <Box sx={{ flex: { xs: '1', md: '0 0 33.333%' } }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body2" color="text.secondary">
                  www.eharish3005@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LinkedIn sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">LinkedIn</Typography>
                  <Typography variant="body2" color="text.secondary">
                  www.linkedin.com/in/harish-e-naidu
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ flex: { xs: '1', md: '0 0 66.666%' } }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 