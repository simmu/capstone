import { useState } from 'react';
import "./confirmedReserve.css";

function ConfirmedReserve({ availableTimes, dispatch }) {
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
        if(name === 'date') {
            dispatch({ type: 'updateTimes', data: { date: value } });
        }
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
                } else if (value < 1 || value > 10) {
                    newErrors.guests = "Number of guests must be between 1 and 10"
                } else {
                    delete newErrors.guests
                }
                break
        }

        setErrors(newErrors)
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        // Validate all fields
        Object.keys(formData).forEach(key => {
            validateField(key, formData[key])
        })

        // If no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Handle form submission here
            console.log('Form submitted:', formData)
        }
    }

    return (
        <div className="reserve-page">
            <section className="reserve-section">
                <header>
                    <h2>Reserve a Table</h2>
                </header>
                <div className="container">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-required="true"
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    aria-required="true"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="date">Date *</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    aria-required="true"
                                    aria-invalid={errors.date ? "true" : "false"}
                                />
                                {errors.date && <span className="error">{errors.date}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Time *</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    aria-required="true"
                                    aria-invalid={errors.time ? "true" : "false"}
                                >
                                    <option value="">Select a time</option>
                                    {availableTimes.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                                {errors.time && <span className="error">{errors.time}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="guests">Number of Guests *</label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    min="1"
                                    max="10"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    aria-required="true"
                                    aria-invalid={errors.guests ? "true" : "false"}
                                />
                                {errors.guests && <span className="error">{errors.guests}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="occasion">Occasion (Optional)</label>
                                <select
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    aria-required="false"
                                >
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
                                aria-required="false"
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
                                aria-required="false"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            aria-label="Submit reservation form"
                            aria-pressed="false"
                        >Book Your Table</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ConfirmedReserve;
