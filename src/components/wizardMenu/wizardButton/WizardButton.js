import React from 'react';
import './WizardButton.scss';

class WizardButton extends React.Component {
    getProgressClasses() {
        let roundedEdge = '';

        if (this.props.stepNumber === 1) {
            roundedEdge = 'round-left';
        } else if (this.props.stepNumber === this.props.numberOfSteps) {
            roundedEdge = 'round-right';
        }

        return `progress ${roundedEdge}`;
    }

    getButtonClasses() {
        return `Wizard-button ${this.props.selected ? 'selected-button' : ''}`;
    }

    render() {
        return (
            <div className={this.getButtonClasses()}>
                <div className="labels-wrapper">
                    <div>
                        <span>Step {this.props.stepNumber}</span>
                        <p>{this.props.stepName}</p>
                    </div>
                </div>
                <div className={this.getProgressClasses()}></div>
            </div>
        );
    }
}

export default WizardButton;
