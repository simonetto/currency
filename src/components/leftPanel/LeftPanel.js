import React from 'react';
import WizardMenu from '../wizardMenu';
import AppFooter from '../appFooter';
import './LeftPanel.scss';

function LeftPanel() {
  return (
    <section className="Left-panel">
      <WizardMenu />
      <AppFooter />
    </section>
  );
}

export default LeftPanel;
