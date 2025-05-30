import { BrowserRouter as Router, Routes, Route } from "react-router"
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import ReservePage from './pages/reservePage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={
              <ReservePage/>
              } />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
