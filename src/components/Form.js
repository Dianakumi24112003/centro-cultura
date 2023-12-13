import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
   
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Formulario de datos
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="Mensaje"
            fullWidth
            margin="normal"
            name="mensaje"
            multiline
            rows={4}
            value={formData.mensaje}
            onChange={handleInputChange}
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
