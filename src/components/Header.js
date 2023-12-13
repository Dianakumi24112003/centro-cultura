// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" component="div">
            Historia de la Cultura de Bolivia
            <p>
            En Bolivia existen 36 diferentes naciones o pueblos indígenas originarios y campesinos, reconocidos por la Constitución Política del Estado. La vestimenta, costumbres, tradiciones, ritos, bailes, ritmos, etc. varía de acuerdo a la zona geográfica del país. En cada región existen culturas vivas de diversos pueblos o naciones.

De las 36 lenguas reconocidas en Bolivia, español, quechua, aymara y guaraní son las más habladas. Ocho de ellas, araona, mosetén, movima, sirionó, yaminahua, yuqui, tapiete y machineri están en riesgo de extinción.

Existe una gran riqueza en tradiciones, vestimentas, bailes y costumbres, mismos que han sido conservados desde la colonia hasta nuestros días. Las tradiciones de los pueblos anteriores a la colonia se mezclaron con las de los españoles en tiempos de la colonia, lográndose el mestizaje de la vestimenta y tradiciones, que aún son conservadas por la población y revividas en las festividades folklóricas del país, entre las que destacan: El Carnaval de Oruro, la Entrada del Gran Poder en la ciudad de La Paz, la Entrada de la Virgen de Urkupiña de la ciudad de Cochabamba, la festividad de Los Chutillos en Potosí.

En estas festividades se muestran bailes típicos como la Diablada, Morenada, los Incas, los Pujllay, los Caporales, los Negritos, la Llamerada, los Ahuatiris, la Tarqueada, los Tinkus, los Suri y muchas otras, en ellas abunda un derroche de colores y alegría, en una extraña mezcla entre paganismo y catolicismo.

Otro aspecto del folklore boliviano es la característica de sus instrumentos nativos, tales como el charango, la quena, el violín tarijeño, el erke, el pututu, el tamborcito, las zampoñas y la matraca entre otros.

El Carnaval de Oruro y el Ichapenkene Pesta fueron inscritas Patrimonio Cultural de la Humanidad.

En la zona del Altiplano es común ver multicolores vestimentas y tejidos, confeccionados con lanas de llama, alpaca, vicuña u oveja, que han sido teñidos utilizando colorantes naturales. Los tejidos con patrones geométricos, zoomorfos y antropomorfos y barras son conocidos como Aguayos o - en quechua - lliqllas (el término awayo es voz quechua y significa tejer). Es común la presencia de estos elementos en comunidades de las y los aymaras, quechuas, urus y chipayas, huarani, tupihuarani con variaciones en tonos o colores dependiendo de cada comunidad. En las ciudades, los descendientes indígenas que migraron han adquirido también vestimentas características que tuvieron origen en tiempos de la colonia. Las mujeres son las mejores representantes de esta herencia, pudiéndose diferenciar claramente el vestuario de mujeres potosinas, orureñas, paceñas, cochabambinas, chuquisaqueñas y tarijeñas. Incluso en La Paz, las comunidades afrobolivianas han sabido mantener tradiciones, música y por supuesto vestimentas características y muy diferenciables del resto, sin significar esto una pérdida de vistosidad, identidad y belleza.

Las zonas orientales que comprenden los departamentos de Santa Cruz, Beni y Pando, presentan características diferentes en cuanto al vestuario, debido al diferente clima que presenta la región oriental, la cual es llana, calurosa y tropical. Otra vez, son las mujeres quienes muestran más toda la vistosidad del vestuario típico de esta región. Los vestidos son de una sola pieza, largos y de mangas cortas con bordes rematados de encajes o lazos de colores. Los "tipoy", que así se denominan a estos vestidos, están confeccionados con hilos suaves y coloreados con matices alegres y diseños floridos. Generalmente las mujeres no llevan sombrero pero prefieren los arreglos en los cuales una flor está sujeta a los cabellos, a veces trenzados en una pieza y a veces en dos. Los varones usan sombreros de ala ancha confeccionado de mimbre o cuero, muy adecuado para el trabajo en el campo donde la temperatura es agradable, aunque muchas veces demasiado elevada.
            </p>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
