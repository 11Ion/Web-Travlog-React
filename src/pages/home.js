import React, { useRef, useState  } from 'react';
import {dataList1} from "../components/DataServices/dataList";
import {dataList} from "../components/DataServices/dataList";
import {testimonialsData} from "../components/DataServices/dataList";

import Header from "../components/Header/header";
import img_frame from "../img/frame.png";
import img_travel from "../img/travel.png";
import featured_img from "../img/featured.png";
import img_travel1 from "../img/105.png";
import f1 from "../img/f1.svg";
import f2 from "../img/f2.svg";
import f3 from "../img/f3.svg";
import left from "../img/arrow-left.png";
import right from "../img/Bold-Outline.png";
import bg from "../img/vect.png";
import object from "../img/OBJECTS.png"
import object2 from "../img/object2.png"
import objec3 from "../img/object3.png"
import img_frame2 from "../img/Frame2.png";


const Home = () => {

    const destinationScrollContainerRef = useRef(null);
    const servicesScrollContainerRef = useRef(null);
    const destinationIsMouseDown = useRef(false);
    const servicesIsMouseDown = useRef(false);
    const destinationStartX = useRef(0);
    const servicesStartX = useRef(0);
    const destinationScrollLeft = useRef(0);
    const servicesScrollLeft = useRef(0);
  
    const handleMouseDown = (event, component) => {
      if (component === 'destination') {
        destinationIsMouseDown.current = true;
        destinationStartX.current = event.clientX - destinationScrollContainerRef.current.offsetLeft;
        destinationScrollLeft.current = destinationScrollContainerRef.current.scrollLeft;
        destinationScrollContainerRef.current.classList.add('scrolling');
      } else if (component === 'services') {
        servicesIsMouseDown.current = true;
        servicesStartX.current = event.clientX - servicesScrollContainerRef.current.offsetLeft;
        servicesScrollLeft.current = servicesScrollContainerRef.current.scrollLeft;
        servicesScrollContainerRef.current.classList.add('scrolling');
      }
    };
  
    const handleMouseUp = () => {
      destinationIsMouseDown.current = false;
      servicesIsMouseDown.current = false;
      destinationScrollContainerRef.current.classList.remove('scrolling');
      servicesScrollContainerRef.current.classList.remove('scrolling');
    };
  
    const handleMouseMove = (event, component) => {
      if (component === 'destination' && destinationIsMouseDown.current) {
        event.preventDefault();
        const x = event.clientX - destinationScrollContainerRef.current.offsetLeft;
        const walk = (x - destinationStartX.current) * 1.5;
        destinationScrollContainerRef.current.scrollLeft = destinationScrollLeft.current - walk;
      } else if (component === 'services' && servicesIsMouseDown.current) {
        event.preventDefault();
        const x = event.clientX - servicesScrollContainerRef.current.offsetLeft;
        const walk = (x - servicesStartX.current) * 1.5;
        servicesScrollContainerRef.current.scrollLeft = servicesScrollLeft.current - walk;
      }
    };
    const handleScrollLeft = () => {
        destinationScrollContainerRef.current.scrollLeft -= 300; 
      };
    
      const handleScrollRight = () => {
        destinationScrollContainerRef.current.scrollLeft += 300; 
      };
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1));
    };
    

    return ( 
    <>
        <Header />
        <section className="frame">
            <div className='object'>
                <img src={object} alt='img' draggable="false"/>
            </div>
            <div className="container">
                <img src={img_frame} alt="img" draggable="false" />
                <img src={img_frame2} alt="img" draggable="false" />
            </div>
        </section>
        <section className="services">
            <div className="container">
                <div className="services__info">
                    <div className="services__info__title">
                        Services
                    </div>
                    <div className="services__info__text">
                        Our top value categories for you
                    </div>
                </div>
                <div
                    className="services__carts"
                    ref={servicesScrollContainerRef}
                    onMouseDown={(event) => handleMouseDown(event, 'services')}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(event) => handleMouseMove(event, 'services')}
                >
        {dataList.map((item, id) => (
            <div className="services__cart" key={id}>
                <div className="services__cart__content">
                    <div className="services__cart__image">
                    <img src={item.img} alt="img" draggable="false"/>
                    </div>
                    <div className="services__cart__title">
                    {item.title}
                    </div>
                    <div className="services__cart__text">
                    {item.text}
                    </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </section>
        <section className="destination">
            <div className="container">
                <div className="destination__content">
                    <div className='destination__content__title'>
                        <p>
                            Top Destination
                        </p>
                        <p>
                            Explore top destination
                        </p>
                        
                    </div>
                    <div className='destination__content__controller'>
                        <div className='destination__content__controll-left' onClick={handleScrollLeft}>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.41431 5.00053H17.0001C17.5524 5.00053 18.0001 5.44824 18.0001 6.00053C18.0001 6.55281 17.5524 7.00053 17.0001 7.00053H3.41431L6.65695 10.2432C7.04747 10.6337 7.04747 11.2669 6.65695 11.6574C6.26642 12.0479 5.63326 12.0479 5.24273 11.6574L1.00009 7.41474C0.219045 6.63369 0.219045 5.36736 1.00009 4.58632L5.24273 0.343674C5.63326 -0.0468498 6.26642 -0.0468498 6.65695 0.343674C7.04747 0.734199 7.04747 1.36736 6.65695 1.75789L3.41431 5.00053Z" fill="#191825"/>
                            </svg>
                        </div>
                        <div className='destination__content__controll-right' onClick={handleScrollRight}>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5857 5.00053H0.999907C0.447622 5.00053 -9.34601e-05 5.44824 -9.34601e-05 6.00053C-9.34601e-05 6.55281 0.447622 7.00053 0.999907 7.00053H14.5857L11.3431 10.2432C10.9525 10.6337 10.9525 11.2669 11.3431 11.6574C11.7336 12.0479 12.3667 12.0479 12.7573 11.6574L16.9999 7.41474C17.781 6.63369 17.781 5.36736 16.9999 4.58632L12.7573 0.343674C12.3667 -0.0468498 11.7336 -0.0468498 11.3431 0.343674C10.9525 0.734199 10.9525 1.36736 11.3431 1.75789L14.5857 5.00053Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className='destination__carts'
                    ref={destinationScrollContainerRef}
                    onMouseDown={(event) => handleMouseDown(event, 'destination')}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(event) => handleMouseMove(event, 'destination')}
                >
                {dataList1.map((i, id) => (
                    <div className="destination__cart" key={id}>
                        <img src={i.img} alt='img' draggable="false"></img>
                        <div className='destination__cart__text'>
                            <div className='destination__cart__title'>
                                {i.title}
                            </div>
                            <div className='destination__cart__price'>
                                {i.price}
                            </div>
                        </div>
                        <div className='destination__cart__country'>
                            {i.country}
                        </div>
                        <div className='destination__cart__rating'>
                            {i.rating} 
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9184 12.32C15.6594 12.571 15.5404 12.934 15.5994 13.29L16.4884 18.21C16.5634 18.627 16.3874 19.049 16.0384 19.29C15.6964 19.54 15.2414 19.57 14.8684 19.37L10.4394 17.06C10.2854 16.978 10.1144 16.934 9.9394 16.929H9.6684C9.5744 16.943 9.4824 16.973 9.3984 17.019L4.96839 19.34C4.74939 19.45 4.50139 19.489 4.25839 19.45C3.66639 19.338 3.27139 18.774 3.36839 18.179L4.25839 13.259C4.31739 12.9 4.19839 12.535 3.93939 12.28L0.328387 8.77998C0.0263874 8.48698 -0.0786124 8.04698 0.0593876 7.65C0.193388 7.254 0.535388 6.965 0.948388 6.9L5.91839 6.179C6.29639 6.14 6.62839 5.91 6.79839 5.57L8.9884 1.08C9.0404 0.98 9.1074 0.888 9.1884 0.81L9.2784 0.74C9.3254 0.688 9.3794 0.645 9.4394 0.61L9.5484 0.57L9.7184 0.5H10.1394C10.5154 0.539 10.8464 0.764 11.0194 1.1L13.2384 5.57C13.3984 5.897 13.7094 6.124 14.0684 6.179L19.0384 6.9C19.4584 6.96 19.8094 7.25 19.9484 7.65C20.0794 8.05098 19.9664 8.49098 19.6584 8.77998L15.9184 12.32Z" fill="#FF5722"/>
                            </svg>

                        </div>
                    </div>
                    ))}
                    </div>
                </div>
        </section>
        <section className='travel'>
            <div className='travel__img_right'>
                <img src={img_travel1} alt='img' draggable="false" />
            </div>
            <div className='container'>
                <div className='travel__image'>
                    <img src={img_travel} alt='img' draggable="false"/>
                </div>
                <div className='tavel__content'>
                    <div className='tavel__content__toptitle'>
                        Travel Point
                    </div>
                    <div className='tavel__content__title'>
                        We helping you find your dream location
                    </div>
                    <div className='tavel__content__text'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </div>
                    <ul className='tavel__content__items'>
                        <li className='tavel__content__item'>
                            <div className='tavel__content__item_title'>
                                500+
                            </div>
                            <div className='tavel__content__item_text'>
                                Holiday Package
                            </div>
                        </li>
                        <li className='tavel__content__item'>
                            <div className='tavel__content__item_title'>
                                100
                            </div>
                            <div className='tavel__content__item_text'>
                                Luxury Hotel
                            </div>
                        </li>
                        <li className='tavel__content__item'>
                            <div className='tavel__content__item_title'>
                                7
                            </div>
                            <div className='tavel__content__item_text'>
                                Premium Airlines
                            </div>
                        </li>
                        <li className='tavel__content__item'>
                            <div className='tavel__content__item_title'>
                                2k+
                            </div>
                            <div className='tavel__content__item_text'>
                                Happy Customer
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='featured'>
            <div className='container'>
                <div className='featured__image'>
                    <img src={featured_img} alt='img' draggable="false"/>
                </div>
                <div className='featured__content'>
                    <div className='featured__content__toptitle'>
                        Key features
                    </div>
                    <div className='featured__content__title'>
                        We offer best services
                    </div>
                    <div className='featured__content__text'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                        from 45 BC.
                    </div>
                    <ul className='featured__content__items'>
                        <li className='featured__content__item'>
                            <div className='featured__content__item__content'>
                                <div className='featured__content__item__content_image'>
                                    <img src={f1} alt='img' draggable="false"/>
                                </div>
                                <div className='featured__content__item__content_text'>
                                    <p>We offer best services</p>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                        </li>
                        <li className='featured__content__item'>
                            <div className='featured__content__item__content'>
                                <div className='featured__content__item__content_image'>
                                    <img src={f2} alt='img' draggable="false"/>
                                </div>
                                <div className='featured__content__item__content_text'>
                                    <p>Schedule your trip</p>
                                    <p>It has roots in a piece of classical</p>
                                </div>
                            </div>
                        </li>
                        <li className='featured__content__item'>
                            <div className='featured__content__item__content'>
                                <div className='featured__content__item__content_image'>
                                    <img src={f3} alt='img' draggable="false"/>
                                </div>
                                <div className='featured__content__item__content_text'>
                                    <p>Get discounted coupons</p>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                        </li>   
                    </ul>
                </div>
            </div>
        </section>
        <section className='testimonials'>
            <div className='testimonials_bg'>
                <img src={bg} alt="img"  draggable="false"/>
            </div>
            <div className='container'>
            <div className='testimonials__controller-left' onClick={prevSlide}>
                <img src={left} alt='img' draggable="false"/>
            </div>
            <div className='testimonials__controller-right' onClick={nextSlide}>
                <img src={right} alt='img' draggable="false"/>
            </div>

            <div className='testinolas__carts'>

            {testimonialsData.map((testimonial, index) => (
                <div className={`testinolas__cart${index === currentSlide ? 'active' : ''}`} key={testimonial.id}>
                    <div className='testimonials__toptitle fade'>
                        {testimonial.toptitle}
                    </div>
                    <div className='testimonials__title fade'>
                        {testimonial.title}
                    </div>
                   <div className='testimonials__image fade'>
                        <img src={testimonial.image} alt='img' draggable="false"/>
                   </div>
                   <div className='testimonials__name fade'>
                     <span>{testimonial.name} </span> / {testimonial.occupation}
                    </div>
                    <div className='testimonials__rating fade'>
                        <img src={testimonial.rating} alt='img' draggable="false"/>
                    </div>
                    <div className='testimonials__text fade'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.
                    </div>
                </div>
                
                ))}
                <div className='testimonials__current_slide'>
                    <div
                        className={`current_slide ${currentSlide === 0 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(0)}
                    >
                    </div>
                        <div
                            className={`current_slide ${currentSlide === 1 ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(1)}
                        >
                    </div>
                    <div
                        className={`current_slide ${currentSlide === 2 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(2)}
                    >
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className='newsletter'>
        <div className='object3'>
                <img src={objec3}  alt='img' draggable="false"/>
            </div>
            <div className='container'>
            <div className='object2'>
                <img src={object2}  alt='img' draggable="false"/>
            </div>
                <div className='newsletter__toptitle'>
                    subscribe to our newsletter
                </div> 
                <div className='newsletter__title'>
                    Prepare yourself & let’s explore the beauty of the world
                </div> 
                <form className='newsletter__form' method='get'>
                    <div className='newsletter__form__input__content'>
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.586 0C22.374 0 24.094 0.706667 25.3594 1.97467C26.626 3.24 27.334 4.94667 27.334 6.73333V17.2667C27.334 20.9867 24.3074 24 20.586 24H7.41403C3.69269 24 0.667358 20.9867 0.667358 17.2667V6.73333C0.667358 3.01333 3.67936 0 7.41403 0H20.586ZM22.7074 8.72L22.814 8.61333C23.1327 8.22667 23.1327 7.66667 22.7994 7.28C22.614 7.08133 22.3594 6.96 22.094 6.93333C21.814 6.91867 21.5474 7.01333 21.346 7.2L15.334 12C14.5607 12.6413 13.4527 12.6413 12.6674 12L6.66736 7.2C6.25269 6.89333 5.67936 6.93333 5.33403 7.29333C4.97403 7.65333 4.93403 8.22667 5.23936 8.62667L5.41403 8.8L11.4807 13.5333C12.2274 14.12 13.1327 14.44 14.0807 14.44C15.026 14.44 15.9474 14.12 16.6927 13.5333L22.7074 8.72Z" fill="#191825" fillOpacity="0.75"/>
                    </svg> Your Email
                    <input className='newsletter__form__input' />
                    </div>
                    <button className='newsletter__form__btn'>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    </> 
    
    );
}
 
export default Home;