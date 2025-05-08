import "./heroCarousel.css";
import hero1ImgSrc from "../assets/images/hero-bg-1.png"
import hero2ImgSrc from "../assets/images/hero-bg-2.png"


function HeroCarousel() {
    return (
        <section className='hero-carousel'>
            <article style={{ backgroundImage: `url(${hero2ImgSrc})` }}>
                <div className="skrim">
                    <div className="content">
                        <h2>30% off this weekend!</h2>
                        <p>Treat yourself to authentic Italian flavors with our special weekend promotion.</p>
                        <a href="#reserve" className="btn">Reserve Now</a>
                    </div>
                </div>
            </article>
            {/*<article>
                <h2>Handmade with love</h2>
                <p>Our pasta is made fresh daily using traditional Italian techniques.</p>
            </article>
            <article>
                <h2>Family recipes since 1978</h2>
                <p>Authentic flavors passed down through generations.Our Story</p>
            </article> */}
        </section>
    );
}

export default HeroCarousel;