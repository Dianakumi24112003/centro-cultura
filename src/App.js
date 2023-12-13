// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Buttons from './components/Buttons';
import Multimedia from './components/Multimedia';
import Form from './components/Form';
import Credits from './components/Credits';
import EventsGallery from './components/EventsGallery';
import CulturalBlog from './components/CulturalBlog';
import CulturalResources from './components/CulturalResources';
import CollaborativeProjects from './components/CollaborativeProjects';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/form" element={<Form />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/events-gallery" element={<EventsGallery />} />
          <Route path="/cultural-blog" element={<CulturalBlog />} />
          <Route path="/cultural-resources" element={<CulturalResources />} />
          <Route path="/collaborative-projects" element={<CollaborativeProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
