import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nbcbn5p', 'template_prn44bh', form.current, {
                publicKey: '97pGIjOe2w4KvSpO5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>



            {/* ------------------Right Join Side------------- */}



            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='to_name' placeholder='Enter your email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join