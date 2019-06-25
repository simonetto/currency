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
}

export default new Utils();
