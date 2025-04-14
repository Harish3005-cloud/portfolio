import React from 'react';
import { Container, Typography, Box, Avatar, Paper, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profilePic from '../assets/img/harish1.jpg';

const About: React.FC = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Harish3005-cloud', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('www.linkedin.com/in/harish-e-naidu', '_blank');
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Avatar
          sx={{
            width: 170,
            height: 170,
            margin: '0 auto',
            mb: 3
          }}
          alt="Profile Picture"
          src={profilePic}
        />
        <Typography variant="h4" gutterBottom>
          Harish E
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Tech Enthusiast | Designer | Developer
        </Typography>
        <Box sx={{ mb: 4 }}>
          <IconButton onClick={handleGitHubClick} sx={{ mx: 1 }}>
            <GitHub />
          </IconButton>
          <IconButton onClick={handleLinkedInClick} sx={{ mx: 1 }}>
            <LinkedIn />
          </IconButton>
        </Box>

        <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 4 }}>
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
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Operations Lead at Innov8
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1" color="text.secondary">
                📌Bachelor of Engineering in Computer Science 
                – Cambridge Institue of Technology📍 ----- | CGPA: 8.2 
                📌Higher Secondary Education (12th ISC-Sci) – Lowry Memorial Higher Secondary School 📍 2023 | 
                Percentage: 70% 📌 
                Secondary Education ( 10th Grade) – Narayana Olympiad School 📍 2020 | Percentage: 60%
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Hi, I'm <b>Haeish</b>, a passionate developer with a strong background in web development, data analysis, and programming. 
            I love building intuitive and interactive applications, whether it's recreating popular platforms like <b>Amazon</b>,
            <b>Myntra</b> , and <b>Spotify</b>, developing engaging games like  <b>Flappy Bird</b>
            , or crafting intelligent solutions like a <b>Personal Voice Assistant</b>. <b>With expertise in HTML, CSS, JavaScript, and frameworks for web development</b>,
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