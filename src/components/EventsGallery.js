import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Container, Grid } from '@mui/material';

const eventsData = [
  {
    id: 1,
    title: 'Evento 1',
    imageUrl: 'https://boliviaemprende.com/wp-content/uploads/2021/09/CBBA-2-1024x683.png',
    link: 'https://www.facebook.com/lapazculturas/?locale=es_LA',
  },
  {
    id: 2,
    title: 'Evento 2',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/20/82/87/carnaval-de-oruro.jpg?w=500&h=300&s=1',
    link: 'https://www.tripadvisor.es/Tourism-g295433-Oruro_Oruro_Department-Vacations.html',
  },
  
];

const EventsGallery = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {eventsData.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardMedia
                component="img"
                alt={event.title}
                height="140"
                image={event.imageUrl}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {event.title}
                </Typography>
                <Button variant="contained" color="primary" href={event.link} target="_blank">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsGallery;
