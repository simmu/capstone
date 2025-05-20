import "./heroCarousel.css";
import { Link } from 'react-router';
import hero2ImgSrc from "../assets/images/hero-bg-2.png"


function HeroCarousel() {
    return (
        <section className='hero-carousel'>
            <article style={{ backgroundImage: `url(${hero2ImgSrc})` }}>
                <div className="skrim">
                    <div className="content">
                        <h2>30% off this weekend!</h2>
                        <p>Treat yourself to authentic Italian flavors with our special weekend promotion.</p>
                        <Link to="/reserve"className="btn">Reserve Now</Link>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HeroCarousel;