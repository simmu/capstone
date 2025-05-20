import { useReducer } from 'react';
import BookingForm from "../components/bookingForm";
import antiPastiImgSrc from "../assets/images/bruscetta.webp";
import "./reservePage.css";


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


function ReservePage() {

    const [state, dispatch] = useReducer(bookingReducer, {availableTimes:initializeTimes(), isClosed:false});

    return (
        <div id="reserve">
            <section className="section">
                <header>
                    <h2>Reserve A Table</h2>
                    <p></p>
                </header>
                <div className="container">
                    <div className='highlite'>
                        <div className="polariod" style={{ transform: "rotate(-1deg)" }}>
                            <img alt='Our new menu items' src={antiPastiImgSrc}></img>
                        </div>
                        <p>Reserve your spot today and enjoy a memorable dining experience. Our friendly staff is ready to welcome
                            you in a cozy, authentic Italian atmosphere with the warmth of home.</p>
                    </div>
                    <BookingForm availableTimes={state.availableTimes} dispatch={dispatch}></BookingForm>
                </div>
            </section>
        </div>
    );
}

export default ReservePage;