import React from 'react';
import Utils from '../../utils';
import './CurrencyBox.css';

class CurrencyBox extends React.Component {
    getDecimals() {
        const decimals = (Math.round(this.props.amount * 100) / 100).toFixed(2);
        return `.${decimals.toString().split('.')[1]}`;
    }

    getAmount() {
        return `${Utils.getCurrencySymbol(this.props.currency)} ${Math.floor(this.props.amount)}`;
    }

    getImage() {
        return require(`../../assets/images/${this.props.currency}.png`);
    }

    render() {
        const classes = `Currency-box ${this.props.class}`;
        return (
            <div className={classes}>
            <div className="left-content">
            <span className="title">{this.props.label}</span>
            <div>
            <span className="amount">{this.getAmount()}</span>
            <span className="decimals">{this.getDecimals()}</span>
            </div>
            </div>
            <div className="right-content">
            <img src={this.getImage()} className="currency-logo" alt={this.props.currency} />
            <span>{this.props.currency.toUpperCase()}</span>
            </div>
            </div>
        );
    }
}

export default CurrencyBox;
