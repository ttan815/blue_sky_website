import "./footer.css";
import { useNavigate, useLocation } from 'react-router-dom';
import MapIcon from "./assets/mapIcon.png";
import PhoneIcon from "./assets/phoneIcon.png";
import ClockIcon from "./assets/clockIcon.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    // Don't render footer on the homepage
    if (location.pathname === "/") {
        return null;
    }

    return (
        <div>
            <footer className="footerContainer">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center text-center pt-3">
                    <div className="col mb-2">
                        <img src={MapIcon} alt="Map Icon" />
                        <h5>LOCATION</h5>
                        <a
                        href="https://www.google.com/maps/place/7323+Fair+Oaks+Blvd,+Carmichael,+CA+95608"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-secondary mb-0"
                        style={{ textDecoration: 'none' }}
                        >
                        7323 Fair Oaks Blvd.<br />
                        Carmichael, CA 95608<br />
                        (next to McDonald's)
                        </a>

                    </div>

                    <div className="col mb-2 hoursInfo">
                        <img src={ClockIcon} alt="Clock Icon" />
                        <h5>HOURS</h5>
                        <p className="text-body-secondary mb-0">Monday: Closed</p>
                        <p className="text-body-secondary mb-0">Tues-Thurs: 11:30AM - 3:00PM & 4:00PM - 9:00PM</p>
                        <p className="text-body-secondary mb-0">Fri-Sat: 11:30AM - 3:00PM & 4:00PM - 9:30PM</p>
                        <p className="text-body-secondary mb-0">Sun: 4:00PM - 9:00PM</p>
                    </div>

                    <div className="col mb-2">
                        <img src={PhoneIcon} alt="Phone Icon" />
                        <h5>Phone Orders</h5>
                        <a href="tel:+19164855311" className="text-body-secondary fw-bold mb-0">
                            TEL: (916) - 485 - 5311
                        </a>
                    </div>
                </div>
                <div className="pattern-tiles"></div>
                <div className="copyright">
                    <p className="text-center text-body-secondary mt-3 mb-3 footer-bottomOfficial">
                        © {currentYear} Blue Sky Chinese Restaurant
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
