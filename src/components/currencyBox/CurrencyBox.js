import React from 'react';
import Utils from '../../utils';
import './CurrencyBox.scss';

/**
Box from the left column containing a transaction detail
Parameters:
    amount: Amount to be transferred
    currency: (eur, gbp) Short notation for the currency name
    label: Box title
    class: (top-box, bottom-box) Styles depending on the box position
**/
class CurrencyBox extends React.Component {
    //Given an amout, returns the whole part plus the currency symbol. Ie: 4564,43 => £ 4,564
    getAmount() {
        if (this.props.amount === undefined) {
            return '';
        }
        const value = Math.floor(this.props.amount);
        return `${Utils.getCurrencySymbol(this.props.currency)} ${Utils.addCommas(value)}`;
    }

    getImage() {
        if (this.props.currency) {
            return require(`../../assets/images/${this.props.currency}.png`);
        }
    }

    render() {
        const classes = `Currency-box ${this.props.class}`;
        return (
            <div className={classes}>
                <div className="left-content">
                    <span className="currency-title">{Utils.toUpperCase(this.props.label)}</span>
                    <div className="currency">
                        <span className="amount">{this.getAmount()}</span>
                        <span>{Utils.getDecimalPart(this.props.amount)}</span>
                    </div>
                </div>
                <div className="right-content">
                    <img src={this.getImage()} className="currency-logo" alt={this.props.currency} />
                    <span>{Utils.toUpperCase(this.props.currency)}</span>
                </div>
            </div>
        );
    }
}

export default CurrencyBox;
