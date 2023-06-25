import {Link } from "react-router-dom";
import "./style.css";
import icon from "../../img/icon.png";
import img_header from "../../img/header.png"

const Header = () => {
    return ( 
        <section className="Header">
            <div className="container">

            <div className="header__image">
                <img src={img_header} alt="img" draggable="false"></img>
            </div>
            
                <div className="header__content">
                    <div className="header__content__btn">
                        <p>Explore the world!</p>
                        <img src={icon} alt="img" draggable="false">
                        </img>
                    </div>
                    <div className="header__content__title">
                    Travel <span>top destination</span> of the world
                    </div>
                    <div className="header__content__text">
                        We always make our customer happy by providing as many choices as possible 
                    </div>
                    
                    <div className="header__content__buttons">
                        
                    <Link to="/getStarted" >
                        <div className="header__content__button">
                                Get Started
                        </div>
                        </Link>
                        
                        <Link to="/watchDemo" >
                            <div className="header__content__button2">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9688 0C5.44875 0 0.96875 4.48 0.96875 10C0.96875 15.52 5.44875 20 10.9688 20C16.4888 20 20.9688 15.52 20.9688 10C20.9688 4.48 16.4988 0 10.9688 0ZM13.9688 12.23L11.0687 13.9C10.7087 14.11 10.3088 14.21 9.9187 14.21C9.5188 14.21 9.1287 14.11 8.76875 13.9C8.04875 13.48 7.61875 12.74 7.61875 11.9V8.55C7.61875 7.72 8.04875 6.97 8.76875 6.55C9.4888 6.13 10.3487 6.13 11.0787 6.55L13.9787 8.22C14.6987 8.64 15.1287 9.38 15.1287 10.22C15.1287 11.06 14.6987 11.81 13.9688 12.23Z" fill="#5D50C6"/>
                                </svg>
                                <span>Watch Demo</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Header;