import "./booking.css";
import bookingImgSrc from "../assets/images/tables-with-pasta.png";

function Booking() {
    return (
        <section id='booking' className="section" aria-labelledby="booking-section">
            <header>
                <h2>Book a Table</h2>
            </header>
            <div className="container">
                <div className="polariod">
                    <img alt='Tables set with pasta dishes in a cozy restaurant' src={bookingImgSrc}></img>
                </div>
                <div className="intro">
                    <p>Reserve your spot today and enjoy a memorable dining experience. Our friendly staff is ready to welcome you to an authentic Italian atmosphere with the warmth of home.</p>
                    <button className="btn">Book Your Table</button>
                </div>
            </div>
        </section>
    );
}

export default Booking;