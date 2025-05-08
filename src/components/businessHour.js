import "./businessHour.css";
import streetImgSrc from "../assets/images/street.webp";
function BusinessHour() {
    const openingHours = [
        {
            day: "Monday - Thursday",
            start_time: "11:00 AM",
            end_time: "10:00 PM",
            isOpen: true
        },
        {
            day: "Friday - Saturday",
            start_time: "11:00 AM",
            end_time: "11:00 PM",
            isOpen: true

        },
        {
            day: "Sunday",
            start_time: null,
            end_time: null,
            isOpen: false
        }
    ]
    return (
        <section id='business-hours' className="section">
            <header>
                <h2>Opening Hours</h2>
            </header>
            <div className="container">
                <div id='info'>
                    <ul>
                        {
                            openingHours.map((info, idx) => (
                                <li key={idx}>
                                    <span className='day'>
                                        {info.day}
                                    </span>
                                    <span className='time'>
                                        {info.isOpen ? `${info.start_time} - ${info.end_time}` : "Closed"}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="polariod">
                    <img alt='placeholder' src={streetImgSrc}></img>
                </div>

            </div>
        </section>
    );
}

export default BusinessHour;