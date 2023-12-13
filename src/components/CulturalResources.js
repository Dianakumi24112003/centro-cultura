import React from 'react';
import { Card, CardContent, Typography, Container, Grid, List, ListItem, ListItemText } from '@mui/material';

const recipesData = [
  {
    id: 1,
    title: 'Salteñas',
    ingredients: ['Harina', 'Carne de res', 'Aceitunas', 'Papas', 'Huevos', 'Comino', 'Ají', 'Caldo de carne'],
    procedure: '...'
  },
  {
    id: 2,
    title: 'Sopa de Maní',
    ingredients: ['Maní', 'Carne de res', 'Arroz', 'Papas', 'Cebolla', 'Ajo', 'Tomate', 'Zanahorias'],
    procedure: '...'
  },
  
];

const CulturalResources = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {recipesData.map((recipe) => (
          <Grid item xs={12} md={6} key={recipe.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {recipe.title}
                </Typography>
                <List>
                  <Typography variant="subtitle1" color="textSecondary">
                    Ingredientes:
                  </Typography>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={ingredient} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="subtitle1" color="textSecondary">
                  Procedimiento:
                </Typography>
                <Typography variant="body2" paragraph>
                  {recipe.procedure}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CulturalResources;
