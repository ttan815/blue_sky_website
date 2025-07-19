import './menu.css'
import backgroundPhoto from "./assets/backgroundImage.png"
import blueSkyLogo from "./assets/blueSkyLogo.png"
import aboutUsPhoto from "./assets/blueSkyAboutUs.png"
import { useNavigate } from 'react-router-dom';
import { app, getMenu, db } from "./firebase"
import MenuItem from "./menuItem.jsx"
import React, { useEffect, useState, useMemo, useRef } from "react";
import goldenPatternCategory from "./assets/patterns/goldenPatternCategory.png"

function Menu() {

    const navigate = useNavigate();
    const [BlueSkyMenu, setMenu] = useState([]);
    const [searchedItem, setSearchItem] = useState('');


    useEffect(() => {
        async function getMenuFunction() {
            const theMenu = await getMenu(db);
            setMenu(theMenu);
        }
        getMenuFunction();
    }, [])

    const appetizerItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "appetizer" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const soupItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "soup" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const houseSpecialItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "houseSpecial" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const sizzlingItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "sizzling" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const poultryItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "poultry" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const porkItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "pork" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const beefItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "beef" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const seafoodItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "seafood" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const vegetableTofuItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "vegetableTofu" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const chowMeinRiceNoodlesItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "chowMeinRiceNoodles" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const friedRiceItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "friedRice" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );

    const lunchSpecialItems = useMemo(() =>
        BlueSkyMenu.filter(item =>
            item.category === "lunchSpecial" &&
            (item.name.toLowerCase().includes(searchedItem.toLowerCase()) || searchedItem.length === 0)
        ), [BlueSkyMenu, searchedItem]
    );


    const appetizerRef = useRef(null);
    const soupRef = useRef(null);
    const houseSpecialRef = useRef(null);
    const sizzlingRef = useRef(null);
    const poultryRef = useRef(null);
    const porkRef = useRef(null);
    const beefRef = useRef(null);
    const seafoodRef = useRef(null);
    const vegetableTofuRef = useRef(null);
    const chowMeinRiceNoodlesRef = useRef(null);
    const friedRiceRef = useRef(null);
    const lunchSpecialRef = useRef(null);
    const scrollToSection = (ref) => {
        if (ref.current) {
            const yOffset = -70;
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>

            <div className="nav-bar">
                <div className="nav-bar-title">  
                    <a onClick={()=>{navigate('/')}}>
                        <h1>BLUE SKY</h1>
                    </a>
                </div>
                <div className="nav-bar-elements">
                    <h4>HOME</h4>
                    <h4>FAQ</h4>
                    <h4>REVIEWS</h4>
                </div>
            </div>


            <div className='menuTitlePhotoContainer'>
                <p className='menuTitlePhotoText'>OUR MENU</p>
            </div>



            <div className="scrollmenu ">
                <a onClick={() => scrollToSection(appetizerRef)}>APPETIZERS</a>
                <a onClick={() => scrollToSection(soupRef)}>SOUP</a>
                <a onClick={() => scrollToSection(houseSpecialRef)}>HOUSE SPECIAL</a>
                <a onClick={() => scrollToSection(sizzlingRef)}>SIZZLING</a>
                <a onClick={() => scrollToSection(poultryRef)}>POULTRY</a>
                <a onClick={() => scrollToSection(porkRef)}>PORK</a>
                <a onClick={() => scrollToSection(beefRef)}>BEEF</a>
                <a onClick={() => scrollToSection(seafoodRef)}>SEAFOOD</a>
                <a onClick={() => scrollToSection(vegetableTofuRef)}>VEGETABLE / TOFU</a>
                <a onClick={() => scrollToSection(chowMeinRiceNoodlesRef)}>CHOW MEIN / RICE NOODLES</a>
                <a onClick={() => scrollToSection(friedRiceRef)}>FRIED RICE</a>
                <a onClick={() => scrollToSection(lunchSpecialRef)}>LUNCH SPECIAL</a>
                <input className="searchBar" placeholder='Search..' type='text' onChange={(e) => setSearchItem(e.target.value)}
                ></input>
            </div>

            <div className="backgroundOfMenu">
<div className="container">
                {appetizerItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={appetizerRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">APPETIZER</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>

                        <div className="categoryOfFoodContainer">
                            {appetizerItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {soupItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={soupRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">SOUP</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {soupItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {houseSpecialItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={houseSpecialRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">HOUSE SPECIAL</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {houseSpecialItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {sizzlingItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={sizzlingRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">SIZZLING</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {sizzlingItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {poultryItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={poultryRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">POULTRY</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {poultryItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {porkItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={porkRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">PORK</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {porkItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {beefItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={beefRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">BEEF</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {beefItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {seafoodItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={seafoodRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">SEAFOOD</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {seafoodItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {vegetableTofuItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={vegetableTofuRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">VEGETABLE / TOFU</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {vegetableTofuItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {chowMeinRiceNoodlesItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={chowMeinRiceNoodlesRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">CHOW MEIN / RICE NOODLES</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {chowMeinRiceNoodlesItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {friedRiceItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={friedRiceRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">FRIED RICE</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {friedRiceItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container">
                {lunchSpecialItems.length > 0 && (
                    <>
                        <div className="categoryDesign">
                        <div ref={lunchSpecialRef} className="categoryTitle">
                            <div className="categoryBorder">
                            <img src={goldenPatternCategory} className="categoryIcon left" />
                            <div className="categoryLine"></div>
                            <h3 className="categoryText">LUNCH SPECIAL</h3>
                            <div className="categoryLine"></div>
                            <img src={goldenPatternCategory} className="categoryIcon right" />
                            </div>
                        </div>
                        </div>
                        <div className="categoryOfFoodContainer">
                            {lunchSpecialItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    image={aboutUsPhoto}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            </div>
                    <div className="pattern-tiles"></div>

        </>
    )
}

export default Menu