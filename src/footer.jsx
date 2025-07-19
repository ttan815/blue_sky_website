import "./footer.css";
import { useNavigate } from 'react-router-dom';
import MapIcon from "./assets/mapIcon.png"
import PhoneIcon from "./assets/phoneIcon.png"
import ClockIcon from "./assets/clockIcon.png"
function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <div>
            <footer>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center text-center pt-3">
                    <div className="col mb-2">
                        <img src={MapIcon}/>
                        <h5>LOCATION</h5>
                        <p className="text-body-secondary mb-0">
                            7323 Fair Oaks Blvd.<br />
                            Carmichael, CA 95608<br />
                            (next to McDonald's)
                        </p>
                    </div>

                    <div className="col mb-2">
                        <img src={ClockIcon}/>
                        <h5>HOURS</h5>
                        <p className="text-body-secondary mb-0 text-color">Monday: Closed</p>
                        <p className="text-body-secondary mb-0">Tues-Thurs: 11:30AM - 3PM & 4PM - 9PM</p>
                        <p className="text-body-secondary mb-0">Fri-Sat: 11:30AM - 3PM & 4PM - 9:30PM</p>
                        <p className="text-body-secondary mb-0">Sun: 4PM - 9:00PM</p>
                    </div>

                    <div className="col mb-2">
                        <img src={PhoneIcon}/>
                        <h5>Phone Orders</h5>
                        <p className="text-body-secondary fw-bold mb-0">TEL: (916) - 485 - 5311</p>
                    </div>
                </div>
                        <div className="pattern-tiles"></div>
                        <div>
                            <p className="text-center text-body-secondary mt-3 mb-3 footer-bottom">
                            © {currentYear} Blue Sky Chinese Restaurant
                            </p>
                        </div>


            </footer>
        </div>
    );
}

export default Footer;
