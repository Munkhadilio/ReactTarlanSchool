import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeaderSpacer } from './components/HeaderSpacer/HeaderSpacer';
import './sass/base/fontsMontserat.css';
import './sass/base/fontsRoboto.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admission } from './pages/Admission';
import { SchoolLife } from './pages/SchoolLife';
import { Contacts } from './pages/Contacts';
import { Kindergarten } from './pages/Kindergarten';
import { CompositionOfTeachers } from './components/CompositionOfTeachers/CompositionOfTeachers';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх при изменении пути
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <HeaderSpacer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/schoollife" element={<SchoolLife />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/kindergarten" element={<Kindergarten />}></Route>
        <Route path="/teachers" element={<CompositionOfTeachers />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
