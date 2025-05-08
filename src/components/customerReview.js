import "./customerReview.css";

function CustomerReview() {
    const reviews = [
        {
            name: "Maria G.",
            rating: 5,
            text: "The homemade pasta transported me back to my grandmother's kitchen in Sicily. Absolutely authentic and delicious!",
            date: "October 2023",
        },
        {
            name: "James T.",
            rating: 5,
            text: "Best Italian food in the city! The atmosphere is cozy and the staff treats you like family. Can't wait to go back!",
            date: "November 2023",
        },
        {
            name: "Sofia R.",
            rating: 4,
            text: "The tiramisu is to die for! Everything tastes like it was made with love. A hidden gem worth discovering.",
            date: "December 2023",
        },
    ]

    return (
        <section id='customer-reviews' className="section">
            <header>
                <h2>What Our Guests Say</h2>
            </header>
            <ul className='review-list'>
                {reviews.map(review => (
                    <li>
                        <div>
                        {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className={`star ${i < review.rating ? "filled" : ""}`}>
                                ★
                            </span>
                        ))}
                        </div>
                        <p className='review-text'>{review.text}</p>
                        <div className='author-name'>{review.name}</div>
                        <div className='review-date'>{review.date}</div>
                    </li>
                ))}

            </ul>
        </section>
    );
}

export default CustomerReview;