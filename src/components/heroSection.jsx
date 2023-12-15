// HeroSection.jsx

import React from 'react';
import './heroSection.css';
import { Typography, Paper, Grid, IconButton, Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// HeroSection.jsx

// ... (import statements remain the same)

const HeroSection = () => {
  const iconStyle = { color: 'white' };
  const buttonStyle = { color: 'white', backgroundColor: 'transparent', border: '1px solid white', marginTop: '20px' };
  const check = { marginTop: '10px' };
  return (
    <>
      <Paper elevation={3} className="hero-section">
        <Typography variant="h1" color={'white'}>
          Dinkar Saini
        </Typography>
        <Typography variant="subtitle1" color={'white'} style={check}>
          Passionate about changing the world with technology.
        </Typography>
        <Grid container justifyContent="center" spacing={2} style={check}>
          <Grid item>
            <IconButton href="https://www.facebook.com/dinkar.saini.58" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="github.com/DinkarSaini" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="your-InstagramIcon-link" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="linkedin.com/in/dinkar-saini-67ba27222/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={check}>
          <Grid item>
            <Button variant="outlined" style={buttonStyle}>
              More About Me
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};




export default HeroSection;
