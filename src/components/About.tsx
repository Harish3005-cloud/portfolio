import React from 'react';
import { Container, Typography, Box, Avatar, Paper, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profilePic from '../assets/img/harish1.jpg';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGitHubClick = () => {
    window.open('https://github.com/Harish3005-cloud', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/harish-e-naidu', '_blank');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        textAlign: 'center', 
        py: { xs: 4, md: 8 } 
      }}>
        <Avatar
          sx={{
            width: { xs: 120, sm: 150, md: 170 },
            height: { xs: 120, sm: 150, md: 170 },
            margin: '0 auto',
            mb: 3,
            border: '3px solid',
            borderColor: 'primary.main',
            boxShadow: '0 0 20px rgba(144, 202, 249, 0.5)'
          }}
          alt="Profile Picture"
          src={profilePic}
        />
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 600
          }}
        >
          Harish E
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 4
          }}
        >
          Tech Enthusiast | Designer | Developer
        </Typography>
        <Box sx={{ mb: 4 }}>
          <IconButton 
            onClick={handleGitHubClick} 
            sx={{ 
              mx: 1,
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'primary.main'
              }
            }}
          >
            <GitHub fontSize={isMobile ? "medium" : "large"} />
          </IconButton>
          <IconButton 
            onClick={handleLinkedInClick} 
            sx={{ 
              mx: 1,
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'primary.main'
              }
            }}
          >
            <LinkedIn fontSize={isMobile ? "medium" : "large"} />
          </IconButton>
        </Box>

        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            mt: { xs: 4, md: 6 }, 
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 600
          }}
        >
          Get To Know More About Me
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'stretch',
          mb: 4
        }}>
          <Box sx={{ flex: 1 }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 2, md: 3 }, 
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 600,
                  color: 'primary.main'
                }}
              >
                Experience
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                Operations Lead at Innov8
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 2, md: 3 }, 
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 600,
                  color: 'primary.main'
                }}
              >
                Education
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.6
                }}
              >
                📌 Bachelor of Engineering in Computer Science – Cambridge Institute of Technology | CGPA: 8.2
                <br />
                📌 Higher Secondary Education (12th ISC-Sci) – Lowry Memorial Higher Secondary School | 2023 | Percentage: 70%
                <br />
                📌 Secondary Education (10th Grade) – Narayana Olympiad School | 2020 | Percentage: 60%
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, md: 4 },
            mt: 4,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Hi, I'm <b>Harish</b>, a passionate developer with a strong background in web development, data analysis, and programming. 
            I love building intuitive and interactive applications, whether it's recreating popular platforms like <b>Amazon</b>,
            <b>Myntra</b>, and <b>Spotify</b>, developing engaging games like <b>Flappy Bird</b>,
            or crafting intelligent solutions like a <b>Personal Voice Assistant</b>. <b>With expertise in HTML, CSS, JavaScript, and frameworks for web development</b>,
            alongside Python, C, C++ and Java for programming, 
            I enjoy solving complex problems and bringing ideas to life.
            <b>My data skills, including SQL, NumPy, Pandas, and Excel</b>, 
            help me analyze and visualize insights effectively. I'm always eager to learn and take on new challenges,
            whether it's developing scalable web apps, enhancing AI-driven projects, or diving deeper into data science. 
            If you're looking for a dedicated and creative developer, let's connect!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 
