import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Explorando La Paz',
    imageUrl: 'https://billiken.lat/wp-content/uploads/2022/01/WEB3-LA-PAZ-BOLIVIA-Shutterstock_1791153806-R.M.-Nunes.jpg', // Reemplazar con la imagen de La Paz
    content: 'Descubre la maravillosa ciudad de La Paz.',
    link: 'https://billiken.lat/interesante/la-paz-el-centro-politico-y-administrativo-mas-alto-del-mundo/',
  },
  {
    id: 2,
    title: 'Santa Cruz: Tierra Caliente',
    imageUrl: 'https://cdn.bolivia.com/sdi/2018/09/26/7-curiosidades-de-santa-cruz-673897.jpg', 
    content: 'Sumérgete en la cultura y calidez de Santa Cruz.',
    link: 'https://www.bolivia.com/turismo/noticias/7-curiosidades-de-santa-cruz-206483',
  },
  
];

const CulturalBlog = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.imageUrl}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {post.content}
                </Typography>
                <Button variant="contained" color="primary" href={post.link} target="_blank">
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CulturalBlog;
