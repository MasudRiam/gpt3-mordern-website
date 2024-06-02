import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
    <div className='gpt3__header section__padding'>
        <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>ChatGPT, an artificial intelligence language model created by OpenAI. Based on the GPT-3.5 architecture, which means designed to understand and generate human-like text based on the input receive.</p>

            <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Your Email Address'/>
                <button type='button'>Get Started</button>
            </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt="people"/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
        </div>



            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
    </div>
    )
}

export default Header