import "./style.css";
import logo from "../../img/logo.svg";
import fb from "../../img/f.svg";
import tw from "../../img/t.svg";
import inst from "../../img/i.svg";
import React, { useState } from "react";


const Footer = () => {
    const [elementStates, setElementStates] = useState({
        company: false,
        contact: false,
        meetUs: false,
      });
    
      const handleToggle = (elementId) => {
        setElementStates((prevState) => ({
          ...prevState,
          [elementId]: !prevState[elementId],
        }));
      };
    return (  
        <footer className="Footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content__tile">
                        <img src={logo} alt="logo" draggable="false"></img>
                        Travlog
                    </div>
                    <div className="footer__content__text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </div>
                    <div className="footer__content__links">
                        <div className="footer__content__link">
                            <img src={fb} alt="facebook" draggable="false"></img>
                        </div>
                        <div className="footer__content__link">
                        <img src={tw} alt="twitter" draggable="false"></img>

                        </div>
                        <div className="footer__content__link">
                        <img src={inst} alt="instagram" draggable="false"></img>
                        </div>
                    </div>
                </div>
                <div className="footer__list_company">
                <div className="footer__list_company__title" onClick={() => handleToggle("company")}>
                      <span> Company </span>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#292D32"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#292D32"/>
                        </svg>
                    </div>
                    <ul className={`footer__list_company__items ${elementStates["company"] ? "hidden" : ""}`}>
                        <li className="footer__list_company__item">
                            About
                        </li>
                        <li className="footer__list_company__item">
                            Career  
                        </li>
                        <li className="footer__list_company__item">
                            Mobile  
                        </li>             
                    </ul>
                </div>
                <div className="footer__list_contact">
                <div className="footer__list_contact__title" onClick={() => handleToggle("contact")}>
                   <span> Contact </span>
                   <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#292D32"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#292D32"/>
                        </svg>
                    </div>
                    <ul className={`footer__list_contact__items ${elementStates["contact"] ? "hidden" : ""}`}>
                        <li className="footer__list_contact__item">
                            Why Travlog?
                        </li>
                        <li className="footer__list_contact__item">
                            Partner with us  
                        </li>
                        <li className="footer__list_contact__item">
                            FAQ’s  
                        </li>
                        <li className="footer__list_contact__item">
                            Blog
                        </li>             
                    </ul>
                </div>
                <div className="footer__list_meet_us">
                <div className="footer__list_meet_us__title" onClick={() => handleToggle("meetUs")}>
                       <span> Meet Us </span>   
                       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#292D32"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#292D32"/>
                        </svg>
                    </div>                     
                    <ul className={`footer__list_meet_us__items ${elementStates["meetUs"] ? "hidden" : ""}`}>
                        <li className="footer__list_meet_us__item">
                            +00 92 1234 56789
                        </li>
                        <li className="footer__list_meet_us__item">
                            info@travlog.com 
                        </li>
                        <li className="footer__list_meet_us__item">
                            205. R Street, New York  
                        </li>
                        <li className="footer__list_meet_us__item">
                            BD23200
                        </li>             
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;