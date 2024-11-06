import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="footer_links">
                        <Link to="/">Bosh sahifa</Link>
                        <Link to="/tv">TV</Link>
                        <Link to="/filmlar">Filmlar</Link>
                        <Link to="/seriallar">Seriallar</Link>
                        <Link to="/multfilmlar">Multfilmlar</Link>
                        <Link to="/obunalar">Obunalar</Link>
                        <Link to="/boshqalar">Boshqalar</Link>
                    </div>
                    <div className="footer_social">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <p className="footer_copyright">
                        <Link to="/"> <Logo /> </Link>
                        © 2024 Your Company Name</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
