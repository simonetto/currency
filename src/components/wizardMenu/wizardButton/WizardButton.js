import React from 'react';
import './WizardButton.css';

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
        <p>Step {this.props.stepNumber}</p>
        <p>{this.props.stepName}</p>
        <div className={this.getProgressClasses()}></div>
      </div>
    );
  }
}

export default WizardButton;
