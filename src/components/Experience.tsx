import React from 'react';
import { Container, Typography, Box, Paper, Avatar } from '@mui/material';
import { Check } from '@mui/icons-material';
import Html from '../assets/img/Html.png';
import Css from '../assets/img/Css.png';
import Js from '../assets/img/js.png';
import Python from '../assets/img/pyhton.png';
import Java from '../assets/img/java.png';
import C from '../assets/img/c.png';
import Cpp from '../assets/img/c-logo.webp';
import Sql from '../assets/img/sql.png';
import Numpy from '../assets/img/numpy.png';
import Pandas from '../assets/img/pandas.png';
import Matplotlib from '../assets/img/matplotlib.webp';
import ReactLogo from '../assets/img/React-logo.webp';
import Figma from '../assets/img/Figma-logo.webp';

interface Skill {
  name: string;
  level: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end Development',
    skills: [
      { name: 'HTML', level: 'Experienced', logo: Html },
      { name: 'CSS', level: 'Experienced', logo: Css },
      { name: 'JavaScript', level: 'Experienced', logo: Js }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', level: 'Experienced', logo: ReactLogo }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Experienced', logo: Python },
      { name: 'Java', level: 'Intermediate', logo: Java },
      { name: 'C', level: 'Experienced', logo: C },
      { name: 'C++', level: 'Experienced', logo: Cpp }
    ]
  },
  {
    title: 'Data Analysis',
    skills: [
      { name: 'SQL', level: 'Experienced', logo: Sql },
      { name: 'NumPy', level: 'Experienced', logo: Numpy },
      { name: 'Pandas', level: 'Experienced', logo: Pandas },
      { name: 'Matplotlib', level: 'Experienced', logo: Matplotlib }
    ]
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', level: 'Experienced', logo: Figma }
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Experience
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          My Technical Skills
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'center'
        }}>
          {skillCategories.map((category) => (
            <Box 
              key={category.title} 
              sx={{ 
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(50% - 16px)' },
                minWidth: 0
              }}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {category.skills.map((skill) => (
                    <Box key={skill.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={skill.logo} 
                        alt={skill.name}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box>
                        <Typography variant="body1">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Experience; 