import "./index.css";
import { useNavigate } from 'react-router-dom';
import MapIcon from "./assets/mapIcon.png"
import PhoneIcon from "./assets/phoneIcon.png"
import ClockIcon from "./assets/clockIcon.png"
function Index() {
  const navigate = useNavigate();
  const goToMenu = () => {
    navigate('/menu');
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* <div className="nav-bar">
        <div className="nav-bar-title">  
            <h1>BLUE SKY</h1>
        </div>
        <div className="nav-bar-elements">
            <h4>HOME</h4>
            <h4>MENU</h4>
            <h4>FAQ</h4>
            <h4>REVIEWS</h4>
        </div>
      </div> */}
        <div className="cover-page">
            <div className="cover-page-elements">
                <h1 style={{fontWeight:'bold'}}>BLUE SKY</h1>
                <h3>Mandarin, Hunan, Szechuan Cuisine</h3>
                <button onClick={goToMenu} className="explore-menu-btn">Explore Our Menu</button>
            </div>
        </div>
        <div className="pattern-tiles"></div>
        <div className="about-us-container">
            <div className="about-us">
                <h1>ABOUT US</h1>
                <p>                       
                    Located in Carmichael, Blue Sky Chinese Restaurant is a local favorite for both Carmichael and Sacramento residents. We offer a warm, welcoming atmosphere and a menu full of flavorful Mandarin, Hunan, and Szechuan dishes. From classics to fresh new favorites, our carefully crafted recipes and signature sauces keep guests coming back. Whether you’re joining us for dining or takeout, we’re here to make every visit memorable. Come for the food and stay for the hospitality!
                </p>
            </div>
                        <footer>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center text-center pt-3">
                    <div className="col mb-2">
                        <img src={MapIcon}/>
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

                    <div className="col mb-2">
                        <img src={ClockIcon}/>
                        <h5>HOURS</h5>
                        <p className="text-body-secondary mb-0 text-color">Monday: Closed</p>
                        <p className="text-body-secondary mb-0">Tues-Thurs: 11:30AM - 3:00PM & 4:00PM - 9:00PM</p>
                        <p className="text-body-secondary mb-0">Fri-Sat: 11:30AM - 3:00PM & 4:00PM - 9:30PM</p>
                        <p className="text-body-secondary mb-0">Sun: 4:00PM - 9:00PM</p>
                    </div>

                    <div className="col mb-2">
                        <img src={PhoneIcon}/>
                        <h5>Phone Orders</h5>
                        <a href="tel:+19164855311" className="text-body-secondary fw-bold mb-0">
                        TEL: (916) - 485 - 5311
                        </a>

                    </div>
                </div>
                        <div className="pattern-tiles"></div>
                        <div className="copyright">
                            <p className="text-center text-body-secondary mt-3 mb-3 footer-bottom">
                            © {currentYear} Blue Sky Chinese Restaurant
                            </p>
                        </div>

            </footer>
        </div>
      
    </>
  );
}

export default Index;
