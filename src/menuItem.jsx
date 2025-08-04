import './menuItem.css'

import orangeChicken from "./assets/orangeChicken.jpg"
import saltAndPepperPrawns from "./assets/saltAndPepperPrawns.jpeg"
import curryChicken from "./assets/curryChicken.jpeg"
import lemonChicken from "./assets/lemonChicken.jpg"
// import wokComboPlatter from "./assets/wokComboPlatter.jpeg"

import chickenWithBBNSauce from "./assets/chickenWithBBNSauce.jpeg"
import greenBeanChicken from "./assets/greenBeanChicken.jpeg"
import broccoliChicken from "./assets/broccoliChicken.jpeg"
import creamCheeseWonton from "./assets/creamCheeseWonton.jpeg"
import broccoliBeef from "./assets/broccoliBeef.jpeg"
import vegeFriedRice from "./assets/vegeFriedRice.jpeg"
// import comboFriedRice from "./assets/comboFriedRice.jpeg"

import cherryPork from "./assets/cherryPork.jpeg"
import mongolianBeef from "./assets/mongolianBeef.jpeg"
import sweetAndSourPork from "./assets/sweetAndSourPork.jpeg"
import chickenChowMein from "./assets/chickenChowMein.jpeg"
import saltAndPepperSpareribs from "./assets/saltAndPepperSpareribs.jpeg"
import mushroomChicken from "./assets/mushroomChicken.jpeg"
import bbqChowmein from "./assets/bbqChowmein.jpeg"
import broccoliChickenLunchSpecial from "./assets/broccoliChickenLunchSpecial.jpeg"
import almondChickenLunchCombo from "./assets/almondChickenLunchCombo.jpeg"
import beefWMixVegesLunchCombo from "./assets/beefWMixVegesLunchCombo.jpeg"
import honeyWalnutChicken from "./assets/honeyWalnutChicken.jpeg"


const imageMap = {
    "Orange Chicken": orangeChicken,
    "Salt & Pepper Prawns": saltAndPepperPrawns,
    "Curry Chicken": curryChicken,
    "Lemon Chicken": lemonChicken,
    // "Wok's Combination Platter": wokComboPlatter,
    "Chicken with Black Bean Sauce": chickenWithBBNSauce,
    "Green Bean Chicken": greenBeanChicken,
    "Broccoli Chicken": broccoliChicken,
    "Cream Cheese Wonton": creamCheeseWonton,
    "Broccoli Beef": broccoliBeef,
    "Vegetable Fried Rice": vegeFriedRice,
    // "Combination Fried Rice": comboFriedRice,
    "Cherry Pork": cherryPork,
    "Mongolian Beef": mongolianBeef,
    "Sweet & Sour Pork": sweetAndSourPork,
    "Chicken or Beef or B.B.Q Pork Chow Mein": chickenChowMein,
    "Salt & Pepper Spareribs": saltAndPepperSpareribs,
    "Honey Walnut Chicken": honeyWalnutChicken

};
const lunchImageMap = {
    "Chicken with Broccoli": broccoliChickenLunchSpecial,
    "Almond Chicken Lunch Combo": almondChickenLunchCombo,
    "Beef w/ Mix Veges Lunch Combo": beefWMixVegesLunchCombo,
};
function MenuItem({ name, description, cost, category }) {
    const defaultImage = imageMap[name];
    const lunchImage = lunchImageMap[name];

    // Prefer lunch image if this is a lunch special and an override exists
    const displayImage = category === "lunchSpecial" ? lunchImage : defaultImage;

    return (
        <div className="foodContainer">
            <div className="foodContainerInfo">
                <p className="foodName">{name}</p>
                <p className="foodDescription">{description}</p>
                <p className="foodPrice">${cost}</p>
            </div>

            {displayImage && <img src={displayImage} className="foodImage" alt={name} />}
        </div>
    );
}


export default MenuItem;
