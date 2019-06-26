import React from 'react';
import Modal from '../modal';
import CurrencyBox from '../currencyBox';
import Button from '../button';
import IdentityVerification from '../identityVerification';
import './StepContent.css';

class StepContent extends React.Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            showModal: false,
            transaction: [
                {
                    amount : 2000,
                    currency : 'eur',
                    label : 'YOU SEND',
                    class : 'top-box'
                },
                {
                    amount : 1717.94,
                    currency : 'gbp',
                    label : 'RECEIVER GETS',
                    class : 'bottom-box'
                }
            ]
        };
    }

    handleNext() {
        this.setState({showModal: true});
    }

    renderModal() {
        if (this.state.showModal) {
            return <Modal content={<IdentityVerification onClose={this.hideModal} />}/>;
        }
    }

    hideModal() {
        this.setState({showModal: false});
    }

    render() {
        const content = this.state.transaction.map((part, index) => <CurrencyBox class={part.class}
            key={index}
            currency={part.currency}
            amount={part.amount}
            label={part.label}/>);

            return (
                <div className="Step-content">
                    {this.renderModal()}
                    <p>Let's set up your transaction!</p>
                    <p>Specify the amount to be sent or received</p>
                    {content}
                    <div className="next-button">
                        <Button label="Next" type="ok" handler={this.handleNext} />
                    </div>
                </div>
            );
        }
    }

    export default StepContent;
