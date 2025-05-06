import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header></Header>
      <section className='hero'>
          <ul>
            <li>
              <article>
                <h2>30% off this weekend!</h2>
                <p>Treat yourself to authentic Italian flavors with our special weekend promotion.</p>
              </article>
            </li>
            <li>
              <article>
                <h2>Handmade with love</h2>
                <p>Our pasta is made fresh daily using traditional Italian techniques.</p>
              </article>
            </li>
            <li>
              <article>
                <h2>Family recipes since 1978</h2>
                <p>Authentic flavors passed down through generations.Our Story</p>
              </article>
            </li>

          </ul>
      </section>
      <section id='new-menu'>
        <div className='highlite'>
          <h2>Antipasti</h2>
          <p>Discover our latest creations inspired by traditional Italian flavors. From hand-tossed pizzas to homemade pastas, every dish is crafted with love and care.</p>
          <a href='#menu'>See our menu</a>
        </div>
        <div className='highlite'>
          <h2>Antipasti</h2>
          <p>Discover our latest creations inspired by traditional Italian flavors. From hand-tossed pizzas to homemade pastas, every dish is crafted with love and care.</p>
          <a href='#menu'>See our menu</a>
        </div>
      </section>
      <section id='booking'>
          <h2>Book a Table</h2>
          <img alt='placeholder' src='https://kzmis5f5g3tczbfwwdo9.lite.vusercontent.net/placeholder.svg?height=600&width=800'></img>
          <div>
            <p>Reserve your spot today and enjoy a memorable dining experience. Our friendly staff is ready to welcome you to an authentic Italian atmosphere with the warmth of home.</p>
            <a href='#booking'>Book Your Table</a>
          </div>
      </section>
      <section id='business-hours'>
        <div id='info'>
          <ul>
            <li>
              <span className='day'>
                Monday–Thursday
              </span>
              <span className='time'>
                11:00 AM - 9:00 PM
              </span>
            </li>
            <li>
              <span className='day'>
                Friday - Saturday
              </span>
              <span className='time'>
                11:00 AM - 11:00 PM
              </span>
            </li>
            <li>
              <span className='day'>
                Sunday
              </span>
              <span className='time'>
                Closed
              </span>
            </li>
          </ul>
        </div>
        <img alt='placeholder' src='https://kzmis5f5g3tczbfwwdo9.lite.vusercontent.net/placeholder.svg?height=600&width=800'></img>
      </section>
      <section id='customer-reviews'>
        <h2>What Our Guests Say</h2>
        <ul>
          <li>
            <div className='rating'>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className='review-text'>The homemade pasta transported me back to my grandmother's kitchen in Sicily. Absolutely authentic and delicious!</p>
            <div className='author-name'>Maria G.</div>
            <div className='review-date'>Octover 2024</div>
          </li>
        </ul>
      </section>
      <footer>
        <p>Made with love &copy; 2025 Little Lemon</p>
        <ul id='social-links'>
          <li>
            <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <i className="social-icon">F</i>
            </a>
          </li>
          <li>
            <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <i className="social-icon">F</i>
            </a>
          </li>
          <li>
            <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <i className="social-icon">F</i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
    </div>
  );
}

export default App;
