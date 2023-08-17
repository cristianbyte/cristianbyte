import './popup.css'

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>Message Received</h2>
        <p>Thank you. I'll be in touch shortly with a response.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
