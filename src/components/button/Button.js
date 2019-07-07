import React from 'react';
import './Button.scss';

class Button extends React.Component {
    render() {
        const disabled = this.props.disabled ? 'disabled' : '';
        const classes = `Button ${this.props.type} ${disabled}`;
        return (<button className={classes} onClick={this.props.handler} disabled={this.props.disabled}>{this.props.label}</button>);
    }
};

export default Button;
