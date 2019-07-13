class Utils {
    getCurrencySymbol(currency) {
        const symbols = {
          gbp : '£',
          eur : '€'
        };

        return symbols[currency];
    }

    getTwoDecimals(value) {
        return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    }

    getDecimalPart(value) {
        if (value === undefined) {
            return '';
        }

        const decimals = this.getTwoDecimals(value);
        return `.${decimals.toString().split('.')[1]}`;
    }

    addCommas(value) {
        return value.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    }

    toUpperCase(value) {
        return value ? value.toUpperCase() : '';
    }
}

export default new Utils();
