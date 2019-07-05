import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    render() {
        return (<section className="Modal fade-in">
            <div className="modal-content">
                {this.props.content}
            </div>
        </section>);
    }
};

export default Modal;
