
import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Button } from '@mui/material';

const projectsData = [
  {
    id: 1,
    title: 'Proyecto de Sostenibilidad Ambiental',
    description: 'Colaboración para la conservación de áreas naturales en Bolivia.',
    link: 'https://ovacen.com/100-proyectos-ecologicos/',
  },
  {
    id: 2,
    title: 'Iniciativa Educativa para Niños',
    description: 'Colaboración en la creación de programas educativos para niños bolivianos.',
    link: 'https://erbol.com.bo/gente/ni%C3%B1o-de-10-a%C3%B1os-presenta-proyecto-educativo-para-introducir-la-rob%C3%B3tica-en-cursos-iniciales',
  },
 
];

const CollaborativeProjects = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item xs={12} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Button variant="contained" color="primary" href={project.link} target="_blank">
                  Detalles del Proyecto
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CollaborativeProjects;

