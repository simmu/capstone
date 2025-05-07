import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CustomerReview from './components/customerReview';
import BusinessHour from './components/businessHour';
import Booking from './components/booking';

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
      <Booking></Booking>
      <BusinessHour></BusinessHour>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
