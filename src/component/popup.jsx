import { useState } from 'react';
import './popup.css'

export default function Popup({ isOpen, onClose }) {

    const [selectedOption, setSelectedOption] = useState('Collaboration'); // Establece el valor por defecto

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    
    function handleForm(e){
        e.preventDefault()
        let name = document.getElementById("name").value
        let mail = document.getElementById("email").value
        let message = document.getElementById("message").value

        if (!name || !mail || !message) {
            alert("Por favor, rellena todos los campos.");
            return; // Detiene la ejecución de la función
          }

        Email.send({
            SecureToken : "0bf8d05d-c689-4a83-92e2-d1bd595e132e",
            To : "send@cristianbyte.com",
            From : "charlsmaritz@gmail.com",
            Subject : selectedOption,
            Body : `Name: ${name} \n Email: ${mail} \n ${message}`
        }).then(
          message => alert(message)
        );        
    }

    return (
        isOpen && (
            <div className="popup">
                <form className='popup__form' method='post'>
                    <div className='close' onClick={onClose}>x</div>
                    <h3 className='popup__title' >Contact:</h3>
                    <input type="text" name="name" id="name" placeholder='My name' required/>
                    <input type="email" name="email" id="email" placeholder='Email' required/>
                    <div className="subject">
                        <h4>subject:</h4>
                        <div className="subject__option">
                            <input type="radio" id="option1" name="option" value="Get a Quote" onChange={handleOptionChange}/>
                            <label htmlFor="option1">Get a Quote</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option2" name="option" value="Collaboration" defaultChecked onChange={handleOptionChange}/>
                            <label htmlFor="option2">Collaboration</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option3" name="option" value="Support" onChange={handleOptionChange}/>
                            <label htmlFor="option3">Support</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option4" name="option" value="Job" onChange={handleOptionChange}/>
                            <label htmlFor="option4">Job</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option5" name="option" value="Other" onChange={handleOptionChange}/>
                            <label htmlFor="option5">Other</label>
                        </div>
                        <textarea name="message" id="message"  placeholder='Hola 👋 ...' required ></textarea>
                    </div>
                    <button className='popup__send' onClick={handleForm} type='submit'>Send</button>
                </form>
            </div>
        )
    );
};
