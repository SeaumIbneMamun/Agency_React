import React from 'react';
import './Services.css'
import monitor from '../../assets/images/icon/monitor 1.png'
import book from '../../assets/images/icon/Book.png'
import chat from '../../assets/images/icon/Chat.png'
import message from '../../assets/images/icon/message.png'
const Services = () => {

   return (
    <div className='services'>
        <div className="service-items">
            <div className='service-box'>
                <div>
                <h3>Web Design</h3>
                <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                <div className='service-img'>
                    <img src={monitor} alt="" />
                </div>
                </div>
            </div>
            <div className='service-box'>
                <div>
                <h3>Digital Marketing</h3>
                <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                <div className='service-img'>
                    <img src={chat} alt="" />
                </div>
                </div>
            </div>
        </div>

        <div className="service-items">
            <h2>We’re always ready <br />for <span>challenges</span></h2>
            <div className='service-box2'>
                <div>
                <h3>UI/UX Design</h3>
                <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                <div className='service-img2'>
                    <img src={book} alt="" />
                </div>
                </div>
            </div>
            <div className='service-box2'>
                <div>
                <h3>Brand Design</h3>
                <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                <div className='service-img2'>
                    <img  src={message} alt="" />
                </div>
                </div>
            </div>
        </div>
    </div>
   );
};

export default Services;