import React from 'react';
import { connect } from "react-redux";
import Modal from '../modal';
import CurrencyBox from '../currencyBox';
import Button from '../button';
import IdentityVerification from '../identityVerification';
import './StepContent.scss';

const mapStateToProps = state => {
    return { transaction: state.details.transaction };
};

/**
Content of the first step
Properties:
    transaction: object from the back end representing a transaction
**/
class ConnectedStepContent extends React.Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            showModal: false
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
        const send = this.props.transaction.send;
        const receive = this.props.transaction.receive;

        return (
            <div className="Step-content">
                {this.renderModal()}
                <p className="title">Let's set up your transaction!</p>
                <p className="subtitle">Specify the amount to be sent or received</p>
                <CurrencyBox class='top-box' currency={send.currency} amount={send.value} label={send.legend}/>
                <CurrencyBox class='bottom-box' currency={receive.currency} amount={receive.value} label={receive.legend}/>
                <div className="next-button">
                    <Button label="Next" type="ok" handler={this.handleNext} />
                </div>
            </div>
        );
    }
}

const StepContent = connect(mapStateToProps)(ConnectedStepContent);

export default StepContent;
