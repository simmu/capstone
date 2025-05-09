import { useState } from 'react';
import "./reservePage.css";
import antiPastiImgSrc from "../assets/images/bruscetta.webp";


function ReservePage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
        allergies: "",
        requests: "",
    })

    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })

        // Only validate on blur after form has been submitted once
        if (formSubmitted) {
            validateField(name, value)
        }
    }

    // Validate a single field
    const validateField = (name, value) => {
        const newErrors = { ...errors }

        switch (name) {
            case "name":
                if (!value.trim()) {
                    newErrors.name = "Name is required"
                } else {
                    delete newErrors.name
                }
                break
            case "phone":
                if (!value.trim()) {
                    newErrors.phone = "Phone number is required"
                } else if (!/^\d{10,}$/.test(value.replace(/[^0-9]/g, ""))) {
                    newErrors.phone = "Please enter a valid phone number"
                } else {
                    delete newErrors.phone
                }
                break
            case "date":
                if (!value) {
                    newErrors.date = "Date is required"
                } else {
                    const selectedDate = new Date(value)
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)

                    if (selectedDate < today) {
                        newErrors.date = "Date cannot be in the past"
                    } else {
                        delete newErrors.date
                    }
                }
                break
            case "time":
                if (!value) {
                    newErrors.time = "Time is required"
                } else {
                    delete newErrors.time
                }
                break
            case "guests":
                if (!value) {
                    newErrors.guests = "Number of guests is required"
                } else {
                    delete newErrors.guests
                }
                break
            default:
                break
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Validate all fields
    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
            newErrors.phone = "Please enter a valid phone number"
        }

        if (!formData.date) {
            newErrors.date = "Date is required"
        } else {
            const selectedDate = new Date(formData.date)
            const today = new Date()
            today.setHours(0, 0, 0, 0)

            if (selectedDate < today) {
                newErrors.date = "Date cannot be in the past"
            }
        }

        if (!formData.time) {
            newErrors.time = "Time is required"
        }

        if (!formData.guests) {
            newErrors.guests = "Number of guests is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        if (validateForm()) {
            // Form is valid, you can submit the data
            console.log("Form submitted:", formData)
            alert("Reservation submitted successfully! We'll contact you to confirm your booking.")

            // Reset form after successful submission
            setFormData({
                name: "",
                phone: "",
                date: "",
                time: "",
                guests: 1,
                occasion: "",
                allergies: "",
                requests: "",
            })
            setFormSubmitted(false)
        } else {
            // Form has errors
            console.log("Form has errors")
        }
    }

    // Handle blur event
    const handleBlur = (e) => {
        // Only validate on blur if form has been submitted once
        if (formSubmitted) {
            const { name, value } = e.target
            validateField(name, value)
        }
    }
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
                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name ? "input-error" : ""}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Contact Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.phone ? "input-error" : ""}
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.date ? "input-error" : ""}
                                />
                                {errors.date && <span className="error-message">{errors.date}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <select id="time" name="time" onChange={handleChange} onBlur={handleBlur} className={errors.time ? "input-error" : ""}>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                </select>
                                {errors.time && <span className="error-message">{errors.time}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="guests">Number of Guests</label>
                                <input type="number" placeholder="1" min="1" max="10" id="guests"
                                    name="guests"
                                    value={formData.guests} onChange={handleChange}
                                    onBlur={handleBlur} className={errors.guests ? "input-error" : ""}></input>
                                {errors.guests && <span className="error-message">{errors.guests}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="occasion">Occasion (Optional)</label>
                                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="date">Date Night</option>
                                    <option value="business">Business Meal</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="allergies">Allergies/Dietary Restrictions (Optional)</label>
                            <textarea
                                id="allergies"
                                name="allergies"
                                rows="2"
                                value={formData.allergies}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="requests">Special Requests (Optional)</label>
                            <textarea
                                id="requests"
                                name="requests"
                                rows="2"
                                value={formData.requests}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn">
                            Book Your Table
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ReservePage;