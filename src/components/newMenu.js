import "./newMenu.css";
import antiPastiImgSrc from "../assets/images/bruscetta.webp";
import PastaImgSrc from "../assets/images/pasta.webp";


function NewMenu() {
    return (
        <section id='new-menu' className="section">
            <header>
                <h2>New Menu</h2>
            </header>
            <div className="container">
                <div className='highlite'>
                <div className="polariod" style={{ transform: "rotate(1deg)" }}>
                        <img alt='Our new menu items' src={antiPastiImgSrc}></img>
                    </div>
                    <h3>Antipasti</h3>
                    <p>Discover our latest creations inspired by traditional Italian flavors. From hand-tossed pizzas to homemade pastas, every dish is crafted with love and care.</p>
                    <a href='#menu'>See our menu</a>
                </div>
                <div className='highlite'>
                <div className="polariod" style={{ transform: "rotate(-1deg)" }}>
                        <img alt='Our new menu items' src={PastaImgSrc}></img>
                    </div>
                    <h3>Primi & Secondi</h3>
                    <p>Our main courses feature the finest ingredients, prepared with authentic techniques passed down through generations of Italian culinary tradition.</p>
                    <a href='#menu'>See our menu</a>
                </div>
            </div>
        </section>
    );
}

export default NewMenu;
