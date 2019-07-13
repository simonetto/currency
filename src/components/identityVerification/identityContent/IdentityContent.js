import React from 'react';
import { connect } from "react-redux";
import IdentityInput from './identityInput';
import { getData } from "../../../actions/Identification";
import { sendVerificationNumber } from "../../../actions/Identification";
import { callVerificationNumber } from "../../../actions/Identification";
import { enableVerification } from "../../../actions/Identification";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './IdentityContent.scss';

const mapStateToProps = state => {
    return { phone: state.identification.phone,
             verificationNumber: state.identification.verificationNumber };
};

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData()),
        sendVerificationNumber: () => dispatch(sendVerificationNumber()),
        callVerificationNumber: () => dispatch(callVerificationNumber()),
        enableVerification: numbers => dispatch(enableVerification(numbers))
    };
}

class ConnectedIdentityContent extends React.Component {
    componentDidMount() {
        this.props.getData();
        this.props.sendVerificationNumber();
    }

    constructor(props) {
        super(props);

        this.state = {
            focusIndex : 0,
            numbers : this.props.verificationNumber
        };
    }

    isFocused(index) {
        return index === this.state.focusIndex;
    }

    setFocus(index) {
        this.setState({focusIndex : index});
    }

    setNumber(value) {
        let numbers = this.state.numbers;
        if (this.state.focusIndex < numbers.length) {
            numbers[this.state.focusIndex] = value;
            this.setState({numbers : numbers});
            if (value.length) {
                this.setState({focusIndex : this.state.focusIndex + 1});
            }
        }

        this.props.enableVerification(this.state.numbers);
    }

    newCodeHandler(sendNumberFunction) {
        this.setState({numbers : ['', '', '', '', '', ''],
                       focusIndex : 0
                      });
        sendNumberFunction();
        this.props.enableVerification(this.state.numbers);
    }

    render() {
        const inputs = this.state.numbers.map((number, index) => <IdentityInput key={index}
                                                                                index={index}
                                                                                onFocus={this.setFocus.bind(this)}
                                                                                isFocused={this.isFocused(index)}
                                                                                value={this.state.numbers[index]}
                                                                                onInput={this.setNumber.bind(this)}/>)

        return (
            <div className="Identity-content">
                <div className="content-width">
                    <div className="phone-number">
                        <span>Enter the code sent via SMS to</span>
                        <div className="number country-code">+{this.props.phone.country}</div>
                        <div className="number phone">{this.props.phone.number}</div>
                    </div>
                    <div className="validation-inputs">
                        {inputs}
                    </div>
                    <div className="links">
                        <div onClick={this.newCodeHandler.bind(this, this.props.sendVerificationNumber)}>
                            <FontAwesomeIcon icon={faRedoAlt} />
                            <span>Receive a new code</span>
                        </div>
                        <div onClick={this.newCodeHandler.bind(this, this.props.callVerificationNumber)}>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <span>Receive code via call instead</span>
                        </div>
                    </div>
                </div>
            </div>);
    }
};

const IdentityContent = connect(mapStateToProps, mapDispatchToProps)(ConnectedIdentityContent);

export default IdentityContent;
