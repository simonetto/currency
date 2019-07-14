import React from 'react';
import './Modal.scss';

/**
Component to handle the modal
Properties:
    content: the content to be displayed on the modal
**/
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
