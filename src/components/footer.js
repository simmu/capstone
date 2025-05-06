import "./footer.css";

function Footer() {
    return (
        <footer id="main-footer">
            <p>Made with love &copy; 2025 Little Lemon</p>
            <ul id='social-links'>
                <li>
                    <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="http://socialnetwork.example" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
                    <i class="fa-brands fa-x-twitter"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;