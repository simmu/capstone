import React, { act } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { useReducer } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import ReservePage from './pages/reservePage';


function bookingReducer(state, action) {
  switch (action.type) {
    case 'updateTimes':
      const updatedTimes = updateTimes(action.data.date);
      return {
        ...state,
        availableTimes: updatedTimes
      };
    default:
      return state;
  }
}

function initializeTimes (date) {
  return ['17:00', '18:00', '19:00', '21:00'];
}

function updateTimes (date) {
  const selectedDate = new Date(date);
  if (selectedDate.getUTCDay() === 0) { // 0 represents Sunday
    return ['--closed--'];
  }else {
    return ['16:00','17:00', '17:30', '18:00', '19:00', '21:00'];
  }
}


function App() {

  const [state, dispatch] = useReducer(bookingReducer, {availableTimes:initializeTimes(), isClosed:false});

  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={
              <ReservePage dispatch={dispatch} availableTimes={state.availableTimes} />
              } />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
