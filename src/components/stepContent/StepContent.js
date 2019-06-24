import React from 'react';
import CurrencyBox from '../currencyBox';
import './StepContent.css';

class StepContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        sending : {
          amount : 2000,
          currency : 'eur'
        },
        receiving : {
          amount : 1717.94,
          currency : 'gbp'
        }
      }
    };
  }

  render() {
    return (
      <div className="Step-content">
        <h1>Let's set up your transaction!</h1>
        <h2>Specify the amount to be sent or received</h2>
        <CurrencyBox currency={this.state.transaction.sending.currency}
                     amount={this.state.transaction.sending.amount}
                     isSend={true}/>
        <CurrencyBox currency={this.state.transaction.receiving.currency}
                     amount={this.state.transaction.receiving.amount}
                     isSend={false}/>
        <button>Next</button>
      </div>
    );
  }
}

export default StepContent;
