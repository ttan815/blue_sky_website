import "./index.css";

function Index() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-title">  
            <h1>BLUE SKY</h1>
        </div>
        <div className="nav-bar-elements">
            <h4>HOME</h4>
            <h4>MENU</h4>
            <h4>FAQ</h4>
            <h4>REVIEWS</h4>
        </div>
      </div>
        <div className="cover-page">
            <div className="cover-page-elements">
                <h1 style={{fontWeight:'bold'}}>BLUE SKY</h1>
                <h3>Mandarin, Hunan, Szechuan Cuisine</h3>
                <button className="explore-menu-btn">Explore Our Menu</button>
            </div>
        </div>
        <div className="pattern-tiles"></div>
        <div className="about-us-container">
            <div className="about-us">
                <h1>ABOUT US</h1>
                <p>                       
                        Located in Carmichael, Blue Sky Chinese Restaurant is a beloved spot for locals in both Carmichael and Sacramento. We offer a comfortable atmosphere where guests can enjoy Mandarin, Hunan, and Szechuan cuisine. Our menu features a variety of flavorful, high-quality dishes, from classic favorites to new options, with tasty lunch specials and takeout choices. Our signature sauces and carefully crafted recipes keep customers coming back. Come for the food, stay for the hospitality—we look forward to sharing a meal with you!
                </p>
            </div>
        </div>
      
    </>
  );
}

export default Index;
