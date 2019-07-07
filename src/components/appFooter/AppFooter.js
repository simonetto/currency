import React from 'react';
import './AppFooter.scss';

function AppFooter() {
  return (
    <footer className="App-footer">
      <div>
        <p>&copy; 2016 CurrencyFair</p>
      </div>
      <div>
        <a href="https://support.currencyfair.com/s/?language=en">Help &amp; Support</a>
        <a href="https://www.currencyfair.com/trust/trust-legal-stuff/">Legal Stuff</a>
      </div>
    </footer>
  );
}

export default AppFooter;
