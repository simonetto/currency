class Utils {
    getCurrencySymbol(currency) {
        const symbols = {
          gbp : '£',
          eur : '€'
        };

        return symbols[currency];
    }

    getTwoDecimals(value) {
        return value;
    }

    addCommas(value) {
        return value.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    }
}

export default new Utils();
