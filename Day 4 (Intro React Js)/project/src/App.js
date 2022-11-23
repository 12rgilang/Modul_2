import './stylesheet/App.css';
import './stylesheet/404.css';
import Navbar from './component/navbar';
import Jumbotron from './component/jumbotron';
import AboutMe from './component/aboutme';
import Card from './component/card';
import Experience from './component/experience';
import Skill from './component/skill';
import { Routes, Route } from "react-router-dom";
import NotFound from './component/Notfound';

function App() {
  return (
          <>
            <Navbar />
            <Jumbotron />
            <AboutMe />
            <Card />
            <Experience />
            <Skill />
            <Routes>
                {/* <Route path='/' element={<Navbar />} />
                <Route path='/' element={<Jumbotron />} />
                <Route path='/' element={<AboutMe />} />
                <Route path='/' element={<Card />} />
                <Route path='/' element={<Experience />} />
                <Route path='/' element={<Card />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
          </>
  );
}

export default App;
