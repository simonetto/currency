import React from 'react';
import IdentityInput from './identityInput';
import './IdentityContent.css';

class IdentityContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone : {
                country : 353,
                number : 872251177
            }
        };
        this.state.numbers = ['', '', '', '', '', ''];
    }

    render() {
        const inputs = this.state.numbers.map((number, index) => <IdentityInput key={index} />)

        return (
            <div className="Identity-content">
                <div className="content-width">
                    <div className="phone-number">
                        <span>Enter the code sent via SMS to</span>
                        <div className="country-code">+{this.state.phone.country}</div>
                        <div className="phone">{this.state.phone.number}</div>
                    </div>
                    <div className="validation-inputs">
                        {inputs}
                    </div>
                    <div className="links">
                        <div>
                            <span>Receive a new code</span>
                        </div>
                        <div>
                            <span>Receive code via call instead</span>
                        </div>
                    </div>
                </div>
            </div>);
    }
};

export default IdentityContent;
