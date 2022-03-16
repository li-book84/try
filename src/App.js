import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import First from './component/pages/First';
import Register from './component/Register'
import './App.css'
import Minor from './component/pages/Minor';
import Major from './component/pages/Major';
import Special from './component/pages/Special';
import FAQLoad from './component/pages/FAQLoad';
import Quest001 from './component/pages/FAQuestions/How+to+buy+project';
import Calculator from './projects/calculator1NetBeans/Calculator';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/projects" element={<First/>} />
          <Route path="/projects/minor" element={<Minor/>} />
          <Route path="/projects/major" element={<Major/>} />
          <Route path="/projects/special" element={<Special/>} />
          <Route path="/FAQ"  element={<FAQLoad/>} />
          <Route path="/FAQ/How+to+buy+a+project" element={<Quest001/>} />
          <Route path="/projects/minor/calculator+using+netbeans" element={<Calculator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
