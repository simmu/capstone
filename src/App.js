import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CustomerReview from './components/customerReview';
import BusinessHour from './components/businessHour';
import Booking from './components/booking';
import NewMenu from './components/newMenu';
import HeroCarousel from './components/heroCarousel';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header></Header>
      <HeroCarousel></HeroCarousel>
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
