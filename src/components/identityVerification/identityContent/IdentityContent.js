import React from 'react';
import IdentityInput from './identityInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './IdentityContent.css';

class IdentityContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone : {
                country : 353,
                number : 872251177
            },
            focusIndex : 0
        };
        this.state.numbers = ['', '', '', '', '', ''];
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

        this.props.onVerificationChange(this.state.numbers.indexOf('') >= 0);
    }

    newCodeHandler() {
        this.setState({numbers : ['', '', '', '', '', ''],
                       focusIndex : 0
                      });
        this.props.onVerificationChange(true);
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
                        <div className="number country-code">+{this.state.phone.country}</div>
                        <div className="number phone">{this.state.phone.number}</div>
                    </div>
                    <div className="validation-inputs">
                        {inputs}
                    </div>
                    <div className="links">
                        <div onClick={this.newCodeHandler.bind(this)}>
                            <FontAwesomeIcon icon={faRedoAlt} />
                            <span>Receive a new code</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <span>Receive code via call instead</span>
                        </div>
                    </div>
                </div>
            </div>);
    }
};

export default IdentityContent;
