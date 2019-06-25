import React from 'react';
import CurrencyBox from '../currencyBox';
import './StepContent.css';

class StepContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        const content = this.state.transaction.map((part, index) => <CurrencyBox class={part.class}
            key={index}
            currency={part.currency}
            amount={part.amount}
            label={part.label}/>);

            return (
                <div className="Step-content">
                <p>Let's set up your transaction!</p>
                <p>Specify the amount to be sent or received</p>
                {content}
                <button>Next</button>
                </div>
            );
        }
    }

    export default StepContent;
