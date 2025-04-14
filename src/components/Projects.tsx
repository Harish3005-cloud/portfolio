import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import Amazon from '../assets/img/Amazon.png';
import Flappy from '../assets/img/Flappy- Bird.png';
import Myntra from '../assets/img/Myntra.png';  
import Spotify from '../assets/img/Spotify.png';
import Jarvis from '../assets/img/jarvis.png';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Desktop Voice Assistant',
    description: 'A Python-based voice assistant that can perform various tasks like web searching, playing music, sending emails, and more using speech recognition and natural language processing.',
    image: Jarvis,
    demoLink: 'https://github.com/Harish3005-cloud/Jarvis.git',
    codeLink: 'https://github.com/Harish3005-cloud/Jarvis.git',
    category: 'AI/ML'
  },
  {
    title: 'Amazon Clone',
    description: 'Cloning the Amazon main page using HTML, CSS, and JavaScript',
    image: Amazon,
    demoLink: 'https://demo1.com',
    codeLink: 'https://github.com/Harish3005-cloud/Amazon-repo.git',
    category: 'Web Development'
  },
  {
    title: 'Flappy Bird',
    description: 'A simple web game using HTML, CSS, and JavaScript',
    image: Flappy,
    demoLink: 'https://flappy-bird-murex-zeta.vercel.app/',
    codeLink: 'https://github.com/Harish3005-cloud/Flappy-bird.git',
    category: 'Games'
  },
  {
    title: 'Myntra Clone',
    description: 'A simple web page using HTML, CSS, and JavaScript',
    image: Myntra,
    demoLink: 'https://myntra-pied.vercel.app/',
    codeLink: 'https://github.com/Harish3005-cloud/projects.git',
    category: 'Web Development'
  },
  {
    title: 'Responsive Spotify',
    description: 'A simple web page using HTML, CSS, and JavaScript',
    image: Spotify,
    demoLink: 'https://spotify-responsive-lemon.vercel.app/',
    codeLink: 'https://github.com/Harish3005-cloud/spotify-responsive.git',
    category: 'Web Development'
  }
];

const Projects: React.FC = () => {
  const categories = ['All', 'Web Development', 'Games', 'AI/ML'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Projects
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          My Recent Work
        </Typography>

        {/* Category Filter */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Projects Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {filteredProjects.map((project) => (
            <Box key={project.title}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.category}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.demoLink} target="_blank">
                    Live Demo
                  </Button>
                  <Button size="small" href={project.codeLink} target="_blank">
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Projects; 