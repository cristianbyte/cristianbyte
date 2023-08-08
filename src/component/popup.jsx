import './popup.css'

export default function Popup({ isOpen, onClose }) {
    return (
        isOpen && (
            <div className="popup">
                <form className='popup__form'>
                    <div className='close' onClick={onClose}>x</div>
                    <h3 className='popup__title' >Contact:</h3>
                    <input type="text" name="name" id="name" placeholder='My name'/>
                    <input type="text" name="email" id="email" placeholder='Email' />
                    <div className="subject">
                        <h4>subject:</h4>
                        <div className="subject__option">
                            <input type="radio" id="option1" name="option" value="option1"/>
                            <label htmlFor="option1">Get a Quote</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option2" name="option" value="option2" defaultChecked/>
                            <label htmlFor="option2">Collaboration</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option3" name="option" value="option3"/>
                            <label htmlFor="option3">Support</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option4" name="option" value="option4"/>
                            <label htmlFor="option4">Job</label>
                        </div>
                        <div className="subject__option">
                            <input type="radio" id="option5" name="option" value="option5"/>
                            <label htmlFor="option5">Other</label>
                        </div>
                        <textarea name="message" id="message"  placeholder='Hola 👋 ...' ></textarea>
                    </div>
                    <button className='popup__send' >Send</button>
                </form>
            </div>
        )
    );
};
