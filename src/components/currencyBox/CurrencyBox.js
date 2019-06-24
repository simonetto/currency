import React from 'react';
import './CurrencyBox.css';

class CurrencyBox extends React.Component {
  getLabel() {
    return this.props.isSend ? 'YOU SEND' : 'RECEIVER GETS';
  }

  getDecimals() {
    const decimals = (Math.round(this.props.amount * 100) / 100).toFixed(2);
    return `.${decimals.toString().split('.')[1]}`;
  }

  getAmount() {
    const symbols = {
      gbp : '£',
      eur : '€'
    };

    return `${symbols[this.props.currency]} ${Math.floor(this.props.amount)}`;
  }

  render() {
    return (
      <div className="Currency-box">
        <div>
          <h1>{this.getLabel()}</h1>
          <span>{this.getAmount()}</span>
          <span>{this.getDecimals()}</span>
        </div>
        <div>
          <span>{this.props.currency.toUpperCase()}</span>
        </div>
      </div>
    );
  }
}

export default CurrencyBox;
