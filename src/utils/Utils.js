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

    postData(url = '', data = {}) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
        .then(response => response.json());
    }
}

export default new Utils();
