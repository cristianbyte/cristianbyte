import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './modal';
import './popup.css'

export default function Popup({ isOpen, onClose }) {

    const [selectedOption, setSelectedOption] = useState('Collaboration'); // Establece el valor por defecto
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        onClose() // cierra la ventana del form
    };

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const form = useRef();
    
    function handleForm(e){
        e.preventDefault()

        let name = document.getElementById("name").value
        let mail = document.getElementById("email").value
        let message = document.getElementById("message").value

        if (!name || !mail || !message) {
            alert("Por favor, rellena todos los campos.");
            return; // Detiene la ejecución de la función
        }

        emailjs.sendForm('service_p1yjjho', 'template_4y6gxzb', form.current, 'IbIlUs60ItVq36ZNd')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            setShowModal(true);
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return (
        isOpen && (
            <div className="popup">
                <form className='popup__form' ref={form} onSubmit={handleForm}>
                    <div className='close' onClick={onClose}>x</div>
                    <h3 className='popup__title' >Contact:</h3>
                    <input type="text" name="user_name" id="name" placeholder='My name' required/>
                    <input type="email" name="user_email" id="email" placeholder='Email' required/>
                    <div className="subject">
                        <h4>subject:</h4>
                        <div className="subject__option">
                            <input type="radio" id="option1" name="selected_option" value="Get a Quote" onChange={handleOptionChange}/>
                            <label htmlFor="option1">Get a Quote</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option2" name="selected_option" value="Collaboration" defaultChecked onChange={handleOptionChange}/>
                            <label htmlFor="option2">Collaboration</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option3" name="selected_option" value="Support" onChange={handleOptionChange}/>
                            <label htmlFor="option3">Support</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option4" name="selected_option" value="Job" onChange={handleOptionChange}/>
                            <label htmlFor="option4">Job</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option5" name="selected_option" value="Other" onChange={handleOptionChange}/>
                            <label htmlFor="option5">Other</label>
                        </div>
                        <textarea name="message" id="message"  placeholder='Hola 👋 ...' required ></textarea>
                    </div>
                    <button className='popup__send' type='submit'>Send</button>
                </form>
                {showModal && <Modal onClose={closeModal} />}
            </div>
        )
        );
};
