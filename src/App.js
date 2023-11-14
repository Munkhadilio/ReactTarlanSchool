import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeaderSpacer } from './components/HeaderSpacer/HeaderSpacer';
import { CompositionOfTeachers } from './components/CompositionOfTeachers/CompositionOfTeachers';
import './sass/base/fontsMontserat.css';
import './sass/base/fontsRoboto.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admission } from './pages/Admission/Admission';
import { SchoolLife } from './pages/SchoolLife';
import { Contacts } from './pages/Contacts/Contacts';
import { Kindergarten } from './pages/Kindergarten';
import { Login } from './pages/Login/index';
import { AddPost } from './pages/AddPost';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import { FullPost } from './pages/FullPost/FullPost';
import { AllNews } from './pages/News';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const scrollRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх при изменении пути
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="App">
      <Header scrollRef={scrollRef} />
      <HeaderSpacer />
      <Routes>
        <Route path="/" element={<Home scrollRef={scrollRef} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news/:id" element={<FullPost />}></Route>
        <Route path="/news/:id/edit" element={<AddPost />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/schoollife" element={<SchoolLife />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/kindergarten" element={<Kindergarten />}></Route>
        <Route path="/teachers" element={<CompositionOfTeachers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-post" element={<AddPost />}></Route>
        <Route path="/news" element={<AllNews />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
