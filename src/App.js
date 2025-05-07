import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CustomerReview from './components/customerReview';
import BusinessHour from './components/businessHour';
import Booking from './components/booking';
import NewMenu from './components/newMenu';

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
      <div className='section-container'>
        <NewMenu></NewMenu>
      </div>
      <Booking></Booking>
      <BusinessHour></BusinessHour>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
